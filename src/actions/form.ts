"use server";

import prisma from "@/lib/prisma";
import { formSchema, formSchemaType } from "@/schemas/form";
import { currentUser } from "@clerk/nextjs";

class UserNotFoundErr extends Error {}

/**
 * Retrieves the statistics of a form.
 * @returns An object containing the number of visits, submissions, submission rate, and bounce rate.
 */
export async function GetFormStats() {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr();
  }

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const visits = stats._sum.visits || 0;
  const submissions = stats._sum.submissions || 0;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionRate;

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
}

/**
 * Retrieves forms for the current user.
 * @returns {Promise<Form[]>} A promise that resolves to an array of forms.
 * @throws {UserNotFoundErr} If the current user is not found.
 */
export async function GetForms() {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr();
  }

  return await prisma.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

/**
 * Creates a new form.
 * @param data - The form data.
 * @returns The ID of the created form.
 * @throws Error if the form data is not valid or if something goes wrong during the creation process.
 */
export async function CreateForm(data: formSchemaType) {
  const validation = formSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("form not valid");
  }

  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr();
  }

  const { name, description } = data;

  const form = await prisma.form.create({
    data: {
      userId: user.id,
      name,
      description,
    },
  });

  if (!form) {
    throw new Error("something went wrong");
  }

  return form.id;
}

/**
 * Retrieves a form by its ID.
 * @param id - The ID of the form to retrieve.
 * @returns A Promise that resolves to the form object if found, or null if not found.
 * @throws {UserNotFoundErr} If the current user is not found.
 */
export async function GetFormById(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr();
  }

  return await prisma.form.findUnique({
    where: {
      userId: user.id,
      id,
    },
  });
}

/**
 * Publishes a form with the specified ID.
 *
 * @param id - The ID of the form to publish.
 * @returns A promise that resolves to the updated form object.
 * @throws {UserNotFoundErr} If the current user is not found.
 */
export async function PublishForm(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr();
  }

  return await prisma.form.update({
    data: {
      published: true,
    },
    where: {
      userId: user.id,
      id,
    },
  });
}

/**
 * Updates the content of a form with the specified ID.
 *
 * @param id - The ID of the form to update.
 * @param jsonContent - The new JSON content for the form.
 * @returns A promise that resolves to the updated form.
 * @throws {UserNotFoundErr} If the current user is not found.
 */
export async function UpdateFormContent(id: number, jsonContent: string) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr();
  }

  return await prisma.form.update({
    where: {
      userId: user.id,
      id,
    },
    data: {
      content: jsonContent,
    },
  });
}

/**
 * Retrieves a form with its submissions for a given ID.
 * @param id - The ID of the form.
 * @returns A Promise that resolves to the form with its submissions.
 * @throws UserNotFoundErr if the current user is not found.
 */
export async function GetFormWithSubmissions(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr();
  }

  return await prisma.form.findUnique({
    where: {
      userId: user.id,
      id,
    },
    include: {
      FormSubmissions: true,
    },
  });
}
