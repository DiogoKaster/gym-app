import { InputField, Input as InputGluestack } from "@gluestack-ui/themed";
import { TextInputProps } from "react-native";

type ColorTonality = "PRIMARY" | "SECONDARY";

type Props = TextInputProps & {
  bg?: ColorTonality;
  isDisabled?: boolean;
};

export function Input({ bg = "PRIMARY", isDisabled = false, ...rest }: Props) {
  return (
    <InputGluestack
      borderWidth={0}
      $focus-borderWidth={1}
      $focus-borderColor="$green500"
      isDisabled={isDisabled}
      $disabled-bg="$gray500"
      bg={bg === "PRIMARY" ? "$gray700" : "$gray600"}
      h={"$12"}
      px={"$4"}
      mb={"$4"}
    >
      <InputField
        fontSize={"$sm"}
        placeholderTextColor={"$gray300"}
        color="$gray100"
        {...rest}
      />
    </InputGluestack>
  );
}
