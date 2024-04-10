import { InputField, Input as InputGluestack } from "@gluestack-ui/themed";
import { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <InputGluestack
      borderWidth={0}
      $focus-borderWidth={1}
      $focus-borderColor="$green500"
      bg="$gray700"
      h={"$12"}
      px={"$4"}
      mb={"$4"}
    >
      <InputField
        fontSize={"$sm"}
        placeholderTextColor={"$gray300"}
        {...rest}
      />
    </InputGluestack>
  );
}
