import { useState } from "react";
import { Heading, VStack, Text } from "@gluestack-ui/themed";
import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";
import { SectionList } from "react-native";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["puxada fronta", "remada unilateral"],
    },
    {
      title: "27.08.22",
      data: ["puxada frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="$gray200" fontSize="$md" mt="$8" mb="$3">
            {section.title}
          </Heading>
        )}
        contentContainerStyle={
          exercises.length === 0
            ? { flex: 1, justifyContent: "center" }
            : { paddingHorizontal: 35 }
        }
        ListEmptyComponent={() => (
          <Text color="$gray100" textAlign="center">
            Não há exercícios registrados ainda.
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
