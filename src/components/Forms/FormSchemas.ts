import { errorMessages } from "@/lib/errorMessages";
import * as yup from "yup";

export const EmployerFormSchema = yup.object({
  name: yup
    .string()
    .required(errorMessages.fieldRequired)
    .min(3, "O nome do funcionário precisa ter no minimo 3 caracteres"),
  position: yup
    .string()
    .required(errorMessages.fieldRequired)
    .min(3, "O cargo do funcionário precisa ter no minimo 3 caracteres"),
  departament: yup
    .string()
    .required(errorMessages.fieldRequired)
    .min(3, "O departamento do funcionário precisa ter no minimo 3 caracteres"),
  admissionDate: yup.string().required(errorMessages.fieldRequired),
});
