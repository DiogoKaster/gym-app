import { TouchableOpacity } from "react-native";

import {
  Center,
  Heading,
  ScrollView,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt="$6" px="$10">
          <UserPhoto
            source={{ uri: "https://github.com/DiogoKaster.png" }}
            alt="user-photo"
            size={135}
          />

          <TouchableOpacity>
            <Text
              color="$green500"
              fontWeight="$bold"
              fontSize="$md"
              mt="$2"
              mb="$8"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="SECONDARY" />
          <Input
            value="diogokaster@rocketseat.com"
            bg="SECONDARY"
            isDisabled={true}
          />
        </Center>

        <VStack px="$10" mt="$4" mb="$9">
          <Heading color="$gray200" fontSize="$md" mb="$2">
            Alterar senha
          </Heading>

          <Input placeholder="Senha antiga" bg="SECONDARY" secureTextEntry />
          <Input placeholder="Nova senha" bg="SECONDARY" secureTextEntry />
          <Input
            placeholder="Confirme a nova senha"
            bg="SECONDARY"
            secureTextEntry
          />

          <View mt="$4">
            <Button title="Atualizar" />
          </View>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
