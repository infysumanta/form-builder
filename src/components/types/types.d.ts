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

/**
 * Represents a form element.
 */
export type FormElement = {
  /**
   * The type of the form element.
   */
  type: ElementsType;

  /**
   * Constructs a form element instance with the specified ID.
   * @param id - The ID of the form element instance.
   * @returns The constructed form element instance.
   */
  construct: (id: string) => FormElementInstance;

  /**
   * The designer button element configuration.
   */
  designerBtnElement: {
    /**
     * The icon component for the designer button element.
     */
    icon: React.ElementType;
    /**
     * The label for the designer button element.
     */
    label: string;
  };

  /**
   * The designer component for the form element.
   */
  designerComponent: React.FC<{
    /**
     * The form element instance to be rendered in the designer.
     */
    elementInstance: FormElementInstance;
  }>;

  /**
   * The form component for the form element.
   */
  formComponent: React.FC<{
    /**
     * The form element instance to be rendered in the form.
     */
    elementInstance: FormElementInstance;
    /**
     * The submit function for the form.
     */
    submitValue?: SubmitFunction;
    /**
     * Indicates whether the form element is invalid.
     */
    isInvalid?: boolean;
    /**
     * The default value for the form element.
     */
    defaultValue?: string;
  }>;

  /**
   * The properties component for the form element.
   */
  propertiesComponent: React.FC<{
    /**
     * The form element instance to be rendered in the properties panel.
     */
    elementInstance: FormElementInstance;
  }>;

  /**
   * Validates the form element instance with the current value.
   * @param formElement - The form element instance to be validated.
   * @param currentValue - The current value of the form element.
   * @returns True if the form element is valid, false otherwise.
   */
  validate: (formElement: FormElementInstance, currentValue: string) => boolean;
};

/**
 * Represents a function that handles form submission.
 * @param key - The key of the form field.
 * @param value - The value of the form field.
 */
export type SubmitFunction = (key: string, value: string) => void;
