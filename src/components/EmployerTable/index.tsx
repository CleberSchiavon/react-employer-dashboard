import React, { useContext, useState } from "react";
import { Employer } from "@/types/Employer";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaSearch, FaPlusCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { useSort } from "@table-library/react-table-library/sort";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/chakra-ui";
import { HomeContext } from "@/pages";
import { ModalTypes } from "@/types/Modals";

export function EmployerTable() {
  const { setCurrentEditingEmployer, setDashboardModal, employers } =
    useContext(HomeContext);

  const handleEditEmployee = (employee: Employer) => {
    setDashboardModal({
      employee: employee,
      modalType: ModalTypes.EDIT_EMPLOYER,
      isOpen: true,
    });
    setCurrentEditingEmployer(employee);
  };

  const TableColumns = [
    {
      label: "Nome",
      renderCell: (item: Employer) => item.name,
      sort: { sortKey: "NAME" },
      resize: true,
    },
    {
      label: "Cargo",
      renderCell: (item: Employer) => item.position,
      sort: { sortKey: "POSITION" },
      resize: true,
    },
    {
      label: "Departamento",
      renderCell: (item: Employer) => item.departament,
      sort: { sortKey: "DEPARTMENT" },
      resize: true,
    },
    {
      label: "Ações",
      renderCell: (item: Employer) => (
        <Flex gap="5">
          <ButtonGroup size="sm">
            <Button
              leftIcon={<FaEdit />}
              onClick={() => handleEditEmployee(item)}
            >
              Editar Funcionário
            </Button>
            <Button
              leftIcon={<FaTrashAlt />}
              colorScheme="red"
              onClick={() =>
                setDashboardModal({
                  employee: item,
                  modalType: ModalTypes.DELETE_EMPLOYER,
                  isOpen: true,
                })
              }
            >
              Deletar Funcionário
            </Button>
          </ButtonGroup>
        </Flex>
      ),
      resize: true,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const chakraTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme([
    chakraTheme,
    {
      Table: `
      --data-table-library_grid-template-columns: 10rem 10rem 15rem auto;
      `,
    },
  ]);
  let data = { nodes: employers };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const sort = useSort(
    data,
    {},
    {
      sortFns: {
        NAME: (array) => array.sort((a, b) => a.name),
        POSITION: (array) => array.sort((a, b) => a.position),
        DEPARTMENT: (array) => array.sort((a, b) => a.department),
      },
    }
  );
  data = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  };

  return (
    <Card borderRadius={5}>
      <CardHeader>
        <Text as="h3" fontWeight="bold" fontSize="xl">
          Tabela de funcionários
        </Text>
        <Flex
          justifyContent="space-between"
          marginTop="1rem"
          flexDirection={["column", "row"]}
          gap={["1rem", "0rem"]}
        >
          <Flex>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaSearch style={{ color: "#4a5568" }} />}
              />
              <Input
                placeholder="Pesquisar funcionário"
                value={searchTerm}
                onChange={handleSearch}
                variant="Filled"
              />
            </InputGroup>
          </Flex>
          <Button
            leftIcon={<FaPlusCircle />}
            onClick={() =>
              setDashboardModal({
                employee: undefined,
                modalType: ModalTypes.ADD_EMPLOYER,
                isOpen: true,
              })
            }
            colorScheme="green"
          >
            Adicionar novo funcionário
          </Button>
        </Flex>
      </CardHeader>
      <CompactTable
        columns={TableColumns}
        data={data}
        theme={theme}
        sort={sort}
        layout={{ custom: true, horizontalScroll: true }}
      />
    </Card>
  );
}
