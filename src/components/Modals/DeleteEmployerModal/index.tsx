import { HomeContext, defaultHomeModalState } from "@/pages";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";

export const DeleteEmployerModal = () => {
  const { setDashboardModal, currentEditingEmployer } = useContext(HomeContext);
  const handleSubmit = async () => {
    await console.log(currentEditingEmployer?.id);
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
        <Button colorScheme="red" onClick={() => handleSubmit()} ml={3}>
          Deletar
        </Button>
      </Flex>
    </Box>
  );
};
