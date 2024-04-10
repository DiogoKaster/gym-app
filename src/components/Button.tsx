import { Button as ButtonGluestack, ButtonText } from "@gluestack-ui/themed";
import { PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: "link" | "outline" | "solid";
}

export function Button({ title, variant = "solid", ...rest }: ButtonProps) {
  return (
    <ButtonGluestack
      h={"$12"}
      bg={variant === "solid" ? "$green700" : "transparent"}
      $active-bg={variant === "solid" ? "$green500" : "$gray500"}
      $pressed-bg={variant === "solid" ? "$green500" : "$gray500"}
      borderColor="$green700"
      variant={variant}
      {...rest}
    >
      <ButtonText
        fontFamily="$heading"
        color={variant === "solid" ? "$white" : "$green700"}
      >
        {title}
      </ButtonText>
    </ButtonGluestack>
  );
}
