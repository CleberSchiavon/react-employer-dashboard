import {
  Flex,
  FlexProps,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface MobileProps extends FlexProps {
  onOpen: () => void;
  navbarText: string;
}
export const MobileNav = ({ onOpen, navbarText, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
