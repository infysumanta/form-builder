"use client";

import { Form } from "@prisma/client";
import { useState } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import useDesigner from "@/components/hooks/useDesigner";
import PublishFormButton from "./PublishFormButton";
import PreviewDialogButton from "./PreviewDialogButton";
import SaveFormButton from "./SaveFormButton";
import DragOverlayWrapper from "./DragOverlayWrapper";
import Designer from "./Designer";

function FormBuilder({ form }: { form: Form }) {
  const { setElements, setSelectedElement } = useDesigner();
  const [isReady, setIsReady] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);
  return (
    <>
      <DndContext sensors={sensors}>
        <main className="flex flex-col w-full">
          <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
            <h2 className="truncate font-medium">
              <span className="text-muted-foreground mr-2">Form:</span>
              {form.name}
            </h2>
            <div className="flex items-center gap-2">
              <PreviewDialogButton />
              {!form.published && (
                <>
                  <SaveFormButton id={form.id} />
                  <PublishFormButton id={form.id} />
                </>
              )}
            </div>
          </nav>
          <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
            <Designer />
          </div>
        </main>
        <DragOverlayWrapper />
      </DndContext>
    </>
  );
}

export default FormBuilder;
