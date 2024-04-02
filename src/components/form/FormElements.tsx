import { TextFieldFormElement } from "@/components/form/fields/TextField";
import { CheckboxFieldFormElement } from "@/components/form/fields/CheckboxField";
import { DateFieldFormElement } from "@/components/form/fields/DateField";
import { NumberFieldFormElement } from "@/components/form/fields/NumberField";
import { ParagprahFieldFormElement } from "@/components/form/fields/ParagraphField";
import { SelectFieldFormElement } from "@/components/form/fields/SelectField";
import { SeparatorFieldFormElement } from "@/components/form/fields/SeparatorField";
import { SpacerFieldFormElement } from "@/components/form/fields/SpacerField";
import { SubTitleFieldFormElement } from "@/components/form/fields/SubTitleField";
import { TextAreaFormElement } from "@/components/form/fields/TextAreaField";
import { TitleFieldFormElement } from "@/components/form/fields/TitleField";
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
