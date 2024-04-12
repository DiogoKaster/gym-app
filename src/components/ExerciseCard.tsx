import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  Icon,
} from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/proxy/7IOqhr2Xztibd6Y79ghybkjTscioWbDSkvp8Zf6x5tM3_KCqy9B4z5E5sPbo97fWlisnQUsRhXAjlYPxQRFpsLkQJXWbHQ35YRw2NgTpEhSRa9-Ho1kcRchNdYOWvZYt4g5bgCibHIYYfon51Ewuw9wt0vERY7W6fh0j_7tkzWL5TM3RHrB7cwDYvDyMiXYp",
          }}
          alt="exercise-image"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading color="$white" fontSize="$lg" mt="-$1.5">
            Remada unilateral
          </Heading>
          <Text color="$gray200" fontSize="$sm" mt="$1" numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
