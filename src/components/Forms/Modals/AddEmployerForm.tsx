import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import { departamentSelectOptions } from "../inputs";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormErrorMessage } from "@/components/Typography/FormErrorMessage";
import { EditEmployer, Employer } from "@/types/Employer";

export interface IAddEmployerForm {
  control: Control<EditEmployer>;
  errors: FieldErrors<Employer>;
}

export const AddEmployerForm = ({ control, errors }: IAddEmployerForm) => {
  return (
    <>
      <FormControl isRequired>
        <InputGroup flexDirection="column">
          <Stack spacing={2}>
            <div>
              <FormLabel>Nome do Funcionário</FormLabel>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} placeholder="Nome do Funcionário" />
                    <FormErrorMessage message={errors.name?.message} />
                  </FormControl>
                )}
              />
            </div>
            <div>
              <FormLabel>Cargo</FormLabel>
              <Controller
                name="position"
                control={control}
                render={({ field }) => (
                  <>
                    <Input {...field} placeholder="Cargo" />
                    <FormErrorMessage message={errors.position?.message} />
                  </>
                )}
              />
            </div>
            <div>
              <FormLabel>Departamento</FormLabel>
              <Controller
                name="departament"
                control={control}
                render={({ field }) => (
                  <>
                    <Select {...field} placeholder="Selecione o departamento">
                      {departamentSelectOptions.map((departament, index) => (
                        <option key={index} value={departament.value}>
                          {departament.label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage message={errors.departament?.message} />
                  </>
                )}
              />
            </div>
            <div>
              <FormLabel>Data de admissão</FormLabel>
              <Controller
                name="admissionDate"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Selecione a data de admissão"
                      size="md"
                      type="date"
                    />
                    <FormErrorMessage message={errors.admissionDate?.message} />
                  </>
                )}
              />
            </div>
          </Stack>
        </InputGroup>
      </FormControl>
    </>
  );
};
