import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";

import {
  Center,
  Heading,
  ScrollView,
  Text,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  View,
  useToast,
} from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/DiogoKaster.png"
  );

  const toast = useToast();

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        if (Number(photoSelected.assets[0].fileSize) / 1024 / 1024 > 5) {
          toast.show({
            placement: "top",
            render: ({ id }) => {
              const toastId = "toast-" + id;
              return (
                <Toast
                  bg="$error500"
                  nativeID={toastId}
                  action="attention"
                  variant="solid"
                >
                  <VStack space="xs">
                    <ToastTitle>Erro</ToastTitle>
                    <ToastDescription>
                      Imagem não pode ter mais que 5MB.
                    </ToastDescription>
                  </VStack>
                </Toast>
              );
            },
          });
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt="$6" px="$10">
          <UserPhoto source={{ uri: userPhoto }} alt="user-photo" size={135} />

          <TouchableOpacity onPress={handleUserPhotoSelect}>
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
