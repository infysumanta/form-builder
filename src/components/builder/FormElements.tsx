import { TextFieldFormElement } from "@/components/builder/fields/TextField";
import { CheckboxFieldFormElement } from "@/components/builder/fields/CheckboxField";
import { DateFieldFormElement } from "@/components/builder/fields/DateField";
import { NumberFieldFormElement } from "@/components/builder/fields/NumberField";
import { ParagprahFieldFormElement } from "@/components/builder/fields/ParagraphField";
import { SelectFieldFormElement } from "@/components/builder/fields/SelectField";
import { SeparatorFieldFormElement } from "@/components/builder/fields/SeparatorField";
import { SpacerFieldFormElement } from "@/components/builder/fields/SpacerField";
import { SubTitleFieldFormElement } from "@/components/builder/fields/SubTitleField";
import { TextAreaFormElement } from "@/components/builder/fields/TextAreaField";
import { TitleFieldFormElement } from "@/components/builder/fields/TitleField";
import { FormElementsType } from "../types/types";

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
  TitleField: TitleFieldFormElement,
  SubTitleField: SubTitleFieldFormElement,
  ParagraphField: ParagprahFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,
  NumberField: NumberFieldFormElement,
  TextAreaField: TextAreaFormElement,
  DateField: DateFieldFormElement,
  SelectField: SelectFieldFormElement,
  CheckboxField: CheckboxFieldFormElement,
};
