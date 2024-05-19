import { Text } from "@chakra-ui/react";
export const FormErrorMessage = ({
  message,
}: {
  message: string | undefined;
}) => {
  return (
    <Text fontSize="small" fontWeight="600" textColor="red">
      {message}
    </Text>
  );
};
