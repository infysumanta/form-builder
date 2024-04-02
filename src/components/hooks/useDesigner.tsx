"use client";

import { useContext } from "react";
import { DesignerContext } from "../context/DesignerContext";

/**
 * Custom hook that provides access to the designer context.
 * Throws an error if used outside of a DesignerContext.
 *
 * @returns The designer context object.
 * @throws {Error} If used outside of a DesignerContext.
 */
function useDesigner() {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error("useDesigner must be used within a DesignerContext");
  }

  return context;
}

export default useDesigner;
