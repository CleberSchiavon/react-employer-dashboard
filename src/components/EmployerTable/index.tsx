import React, { useContext, useState } from "react";
import { Employer } from "@/types/Employer";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Flex,
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

const nodes = [
  {
    id: 0,
    name: "Teste 1",
    position: "Position 1",
    departament: "Departament 1",
  },
  {
    id: 1,
    name: "Teste 2",
    position: "Position 2",
    departament: "Departament 2",
  },
  {
    id: 2,
    name: "Teste 3",
    position: "Position 3",
    departament: "Departament 3",
  },
];

export function EmployerTable() {
  const { setDashboardModal } = useContext(HomeContext);
  const TableColumns = [
    {
      label: "Nome",
      renderCell: (item: Employer) => item.name,
      sort: { sortKey: "NAME" },
    },
    {
      label: "Cargo",
      renderCell: (item: Employer) => item.position,
      sort: { sortKey: "POSITION" },
    },
    {
      label: "Departamento",
      renderCell: (item: Employer) => item.departament,
      sort: { sortKey: "DEPARTMENT" },
    },
    {
      label: "Action",
      renderCell: (item: Employer) => (
        <Flex gap="5">
          <ButtonGroup size="sm">
            <Button
              onClick={() =>
                setDashboardModal({
                  employee: item,
                  modalType: ModalTypes.EDIT_EMPLOYER,
                  isOpen: true,
                })
              }
              leftIcon={<FaEdit />}
            >
              Editar Funcionário
            </Button>
            <Button
              onClick={() =>
                setDashboardModal({
                  employee: item,
                  modalType: ModalTypes.DELETE_EMPLOYER,
                  isOpen: true,
                })
              }
              leftIcon={<FaTrashAlt />}
            >
              Deletar Funcionário
            </Button>
          </ButtonGroup>
        </Flex>
      ),
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const chakraTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(chakraTheme);
  let data = { nodes };
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
        <Flex justifyContent="space-between">
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
      <CardBody>
        <CompactTable
          columns={TableColumns}
          data={data}
          theme={theme}
          sort={sort}
        />
      </CardBody>
    </Card>
  );
}
