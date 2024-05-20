import React from "react";
import {
  Box,
  Skeleton,
  SkeletonText,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const TableSkeletonComponent = () => {
  const rows = 5;
  const columns = 4;

  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <Skeleton height="40px" mb="4" />
      <Table variant="simple">
        <Thead>
          <Tr>
            {Array(columns)
              .fill("")
              .map((_, index) => (
                <Th key={index}>
                  <Skeleton height="20px" />
                </Th>
              ))}
          </Tr>
        </Thead>
        <Tbody>
          {Array(rows)
            .fill("")
            .map((_, rowIndex) => (
              <Tr key={rowIndex}>
                {Array(columns)
                  .fill("")
                  .map((_, colIndex) => (
                    <Td key={colIndex}>
                      <SkeletonText noOfLines={1} />
                    </Td>
                  ))}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableSkeletonComponent;
