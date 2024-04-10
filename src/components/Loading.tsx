import { Spinner, Center } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center flex={1} justifyContent={"center"} bg="$gray700">
      <Spinner color="$green500" />
    </Center>
  );
}
