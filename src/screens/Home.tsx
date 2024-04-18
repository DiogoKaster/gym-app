// @ts-nocheck
import { useState } from "react";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { VStack, FlatList, HStack, Heading, Text } from "@gluestack-ui/themed";
import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState<string[]>([
    "costa",
    "peito",
    "ombro",
    "bípecs",
    "tríceps",
  ]);
  const [exercises, setExercises] = useState<string[]>(["1", "2", "3", "4"]);
  const [groupSelected, setGroupSelected] = useState("costa");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        px={"$8"}
        my={"$10"}
        maxHeight={"$10"}
      />

      <VStack flex={1} px={"$8"}>
        <HStack alignItems="center" justifyContent="space-between" mb={"$5"}>
          <Heading color="$gray200" fontSize={"$md"}>
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize={"$sm"}>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 60,
          }}
        />
      </VStack>
    </VStack>
  );
}
