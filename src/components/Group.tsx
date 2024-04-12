import { Button, Text } from "@gluestack-ui/themed";
import { PressableProps } from "react-native";

type Props = PressableProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Button
      mr="$3"
      w="$24"
      h="$10"
      bg="$gray600"
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      $active-borderWidth={1}
      $active-borderColor="$green500"
      {...rest}
    >
      <Text
        color={isActive ? "$green500" : "$gray200"}
        textTransform="uppercase"
        fontSize="$xs"
      >
        {name}
      </Text>
    </Button>
  );
}
