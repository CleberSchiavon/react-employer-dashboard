import { APIClient } from "@/lib/axios";
import { HomeContext, defaultHomeModalState } from "@/pages";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";

export const DeleteEmployerModal = () => {
  const [deletingEmployee, setDeletingEmployee] = useState(false);
  const {
    setModalError,
    setDashboardModal,
    currentEditingEmployer,
    fetchEmployers,
  } = useContext(HomeContext);
  const handleDeleteEmployer = async () => {
    try {
      setDeletingEmployee(true);
      setModalError(undefined);
      await APIClient.delete(`/employer/${currentEditingEmployer?.employerId}`);
      fetchEmployers();
      setModalError(undefined);
      setDashboardModal(defaultHomeModalState);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setModalError(err.message);
      }
    } finally {
      setDeletingEmployee(false);
    }
  };
  const handleSubmit = async () => {
    setDashboardModal(defaultHomeModalState);
  };
  return (
    <Box>
      <Stack spacing={4}>
        <Text fontSize="lg" fontWeight="bold">
          Deletar Funcionário
        </Text>
        <Text fontSize="md">
          Você tem certeza que deseja deletar o funcionário{" "}
          {currentEditingEmployer?.name}? Essa ação não pode ser desfeita
        </Text>
      </Stack>

      <Flex flexDirection="row" justifyContent="flex-end">
        <Button onClick={() => setDashboardModal(defaultHomeModalState)}>
          Cancelar
        </Button>
        <Button
          colorScheme="red"
          isLoading={deletingEmployee}
          disabled={deletingEmployee}
          onClick={() => handleDeleteEmployer()}
          ml={3}
        >
          Deletar
        </Button>
      </Flex>
    </Box>
  );
};
