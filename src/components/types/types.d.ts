import { Dispatch, SetStateAction } from "react";

/**
 * Represents the available types of form elements.
 */
export type ElementsType =
  | "TextField"
  | "TitleField"
  | "SubTitleField"
  | "ParagraphField"
  | "SeparatorField"
  | "SpacerField"
  | "NumberField"
  | "TextAreaField"
  | "DateField"
  | "SelectField"
  | "CheckboxField";

/**
 * Represents an instance of a form element.
 */
export type FormElementInstance = {
  /**
   * The unique identifier of the form element instance.
   */
  id: string;

  /**
   * The type of the form element.
   */
  type: ElementsType;

  /**
   * Additional attributes for the form element instance.
   */
  extraAttributes?: Record<string, any>;
};

/**
 * Represents the context type for the designer component.
 */
export type DesignerContextType = {
  elements: FormElementInstance[];
  setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;
  updateElement: (id: string, element: FormElementInstance) => void;
};

/**
 * Represents a mapping of element types to form elements.
 */
export type FormElementsType = {
  [key in ElementsType]: FormElement;
};
