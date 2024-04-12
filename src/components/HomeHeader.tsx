import { HStack, Heading, Text, VStack, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";

import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt={"$12"} pb={"$5"} px={"$8"} alignItems="center">
      <UserPhoto
        source={{ uri: "https://github.com/DiogoKaster.png" }}
        alt="user-photo"
        size={64}
        mr={16}
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize={"$md"}>
          Olá,
        </Text>
        <Heading color="$gray100" fontSize={"$md"}>
          Rodrigo
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={LogOut} color="$gray100" size="xl" />
      </TouchableOpacity>
    </HStack>
  );
}
