import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a random ID.
 * @returns A string representing the generated ID.
 */
export function idGenerator(): string {
  return Math.floor(Math.random() * 10001).toString();
}
