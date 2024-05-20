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
import { APIClient } from "@/lib/axios";
import axios from "axios";

export const AddEmployerModal = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver<EditEmployer>(EmployerFormSchema),
  });
  const { setDashboardModal, setEmployers, setModalError, fetchEmployers } =
    useContext(HomeContext);

  const handleAddEmployer = async (values: EditEmployer) => {
    try {
      setModalError(undefined);
      await APIClient.post(`/employer`, values);
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
      <ModalHeader>Adicionar funcionário</ModalHeader>
      <form onSubmit={handleSubmit((values) => handleAddEmployer(values))}>
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
            <Button
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Adicionar Funcionário
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </form>
    </>
  );
};
