import {
  VStack,
  Text,
  Center,
  Heading,
  ScrollView,
  ImageBackground,
  View,
} from "@gluestack-ui/themed";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
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
          <Center mt={"$24"} mb={"$10"}>
            <LogoSvg />
            <Text color="$gray100" fontSize={"$sm"}>
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center>
            <Heading color="$gray100" mb="$6">
              Crie sua conta
            </Heading>
          </Center>

          <Input placeholder="Nome" autoCapitalize="words" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="Confirme a Senha" secureTextEntry />

          <Button title="Criar e acessar" />

          <View mt={"$16"}>
            <Button
              title="Voltar para o login"
              variant="outline"
              onPress={handleGoBack}
            />
          </View>
        </VStack>
      </ImageBackground>
    </ScrollView>
  );
}
