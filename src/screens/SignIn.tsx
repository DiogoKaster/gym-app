import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Text,
  Center,
  Heading,
  ScrollView,
  ImageBackground,
} from "@gluestack-ui/themed";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  return (
    <ScrollView flexGrow={1} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="People Training"
        flex={1}
        px={"$10"}
      >
        <VStack flex={1} pb={"$16"}>
          <Center my={"$24"}>
            <LogoSvg />
            <Text color="$gray100" fontSize={"$sm"}>
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center>
            <Heading color="$gray100" mb="$6">
              Acesse sua conta
            </Heading>
          </Center>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />

          <Center mt={"$24"}>
            <Text color="$white" fontSize={"$sm"} mb={"$3"}>
              Ainda não tem acesso?
            </Text>
          </Center>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </VStack>
      </ImageBackground>
    </ScrollView>
  );
}
