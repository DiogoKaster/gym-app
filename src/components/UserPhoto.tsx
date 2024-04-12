import { Image as GluestackImage } from "@gluestack-ui/themed";
import { ImageProps } from "react-native";

type Props = ImageProps & {
  size: number;
  mr?: number;
};

export function UserPhoto({ size, mr, ...rest }: Props) {
  return (
    <GluestackImage
      w={size}
      h={size}
      rounded={"$full"}
      borderWidth={2}
      borderColor="$gray400"
      mr={mr}
      {...rest}
    />
  );
}
