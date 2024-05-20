import { Text } from "@chakra-ui/react";
export const FormErrorMessage = ({
  message,
  size = "small",
}: {
  message: string | undefined;
  size?: string;
}) => {
  return (
    <Text fontSize={size} fontWeight="600" textColor="red">
      {message}
    </Text>
  );
};
