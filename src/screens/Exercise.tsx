import {
  HStack,
  Icon,
  VStack,
  Heading,
  Text,
  Image,
  Box,
  ScrollView,
} from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack bg="$gray600" pt={"$12"} pb={"$5"} px={"$8"}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          mt="$1.5"
          mb="$1"
          alignItems="center"
        >
          <Heading color="$gray100" fontSize="$lg" flexShrink={1}>
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" ml="$1" textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p="$8">
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/proxy/7IOqhr2Xztibd6Y79ghybkjTscioWbDSkvp8Zf6x5tM3_KCqy9B4z5E5sPbo97fWlisnQUsRhXAjlYPxQRFpsLkQJXWbHQ35YRw2NgTpEhSRa9-Ho1kcRchNdYOWvZYt4g5bgCibHIYYfon51Ewuw9wt0vERY7W6fh0j_7tkzWL5TM3RHrB7cwDYvDyMiXYp",
            }}
            alt="exercise-name"
            w="$full"
            h="$80"
            mb="$3"
            resizeMode="cover"
            rounded="$lg"
          />

          <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
            <HStack
              justifyContent="space-around"
              alignItems="center"
              mb="$4"
              mt="$5"
            >
              <HStack>
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="$gray200" ml="$2">
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
