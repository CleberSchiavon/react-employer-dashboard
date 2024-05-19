import {
  Button,
  ButtonGroup,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { HomeContext, defaultHomeModalState } from "@/pages";
import { EmployerFormSchema } from "@/components/Forms/FormSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EditEmployerForm } from "@/components/Forms/Modals/EditEmployerForm";
import { EditEmployer } from "@/types/Employer";

export const EditEmployerModal = () => {
  const { currentEditingEmployer } = useContext(HomeContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<EditEmployer>(EmployerFormSchema),
    defaultValues: {
      admissionDate: currentEditingEmployer?.admissionDate,
      name: currentEditingEmployer?.name,
      departament: currentEditingEmployer?.departament,
      position: currentEditingEmployer?.position,
    },
  });
  const { setDashboardModal } = useContext(HomeContext);
  return (
    <>
      <ModalHeader>Editar funcionário</ModalHeader>
      <form onSubmit={handleSubmit((values) => console.log(values))}>
        <ModalBody>
          <EditEmployerForm control={control} errors={errors} />
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button
              onClick={() => setDashboardModal(defaultHomeModalState)}
              colorScheme="red"
            >
              Cancelar
            </Button>
            <Button type="submit">Editar Funcionário</Button>
          </ButtonGroup>
        </ModalFooter>
      </form>
    </>
  );
};
