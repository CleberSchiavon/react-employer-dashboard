import {
  Button,
  ButtonGroup,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Stack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { HomeContext, defaultHomeModalState } from "@/pages";
import { EmployerFormSchema } from "@/components/Forms/FormSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EditEmployerForm } from "@/components/Forms/Modals/EditEmployerForm";
import { EditEmployer } from "@/types/Employer";
import { APIClient } from "@/lib/axios";
import axios from "axios";

export const EditEmployerModal = () => {
  const {
    currentEditingEmployer,
    setDashboardModal,
    setModalError,
    fetchEmployers,
  } = useContext(HomeContext);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver<EditEmployer>(EmployerFormSchema),
    defaultValues: {
      admissionDate: currentEditingEmployer?.admissionDate,
      name: currentEditingEmployer?.name,
      departament: currentEditingEmployer?.departament,
      position: currentEditingEmployer?.position,
    },
  });
  const handleEditEmployer = async (values: EditEmployer) => {
    try {
      setModalError(undefined);
      await APIClient.put(
        `/employer/${currentEditingEmployer?.employerId}`,
        values
      );
      fetchEmployers();
      setModalError(undefined);
      setDashboardModal(defaultHomeModalState);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setModalError(err.message);
      }
    }
  };
  return (
    <>
      <ModalHeader>
        <Stack spacing={2}>
          <div>Editar funcionário</div>{" "}
        </Stack>
      </ModalHeader>

      <form onSubmit={handleSubmit((values) => handleEditEmployer(values))}>
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
            <Button
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Editar Funcionário
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </form>
    </>
  );
};
