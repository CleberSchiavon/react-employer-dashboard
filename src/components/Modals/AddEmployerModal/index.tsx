import {
  Button,
  ButtonGroup,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AddEmployerForm } from "@/components/Forms/Modals/AddEmployerForm";
import { HomeContext, defaultHomeModalState } from "@/pages";
import { EmployerFormSchema } from "@/components/Forms/FormSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EditEmployer } from "@/types/Employer";

export const AddEmployerModal = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<EditEmployer>(EmployerFormSchema),
  });
  const { setDashboardModal } = useContext(HomeContext);
  return (
    <>
      <ModalHeader>Adicionar funcionário</ModalHeader>
      <form onSubmit={handleSubmit((values) => console.log(values))}>
        <ModalBody>
          <AddEmployerForm control={control} errors={errors} />
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button
              onClick={() => setDashboardModal(defaultHomeModalState)}
              colorScheme="red"
            >
              Cancelar
            </Button>
            <Button type="submit">Adicionar Funcionário</Button>
          </ButtonGroup>
        </ModalFooter>
      </form>
    </>
  );
};
