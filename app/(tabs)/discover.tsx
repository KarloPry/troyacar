import { Text, Image, StyleSheet, Platform, FlatList } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  return (
    <ThemedView style={{ paddingVertical: 40, height: "100%" }}>
      <ThemedText type="title" style={{ paddingVertical: 40, paddingLeft: 10 }}>
        Bienvenido
      </ThemedText>
      <ThemedView style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <ThemedView
          style={{
            backgroundColor: "#6985C0",
            marginHorizontal: 20,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ThemedText type="subtitle" style={{ color: "white", fontSize: 24 }}>
            Paso 1: Prueba
          </ThemedText>
          <Image
            source={require("@/assets/images/lupa.png")}
            style={{ width: 105, height: 105 }}
          />
        </ThemedView>
        <ThemedView
          style={{
            backgroundColor: "#6F92BF",
            marginHorizontal: 20,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ThemedText type="subtitle" style={{ color: "white", fontSize: 24 }}>
            Paso 1: Prueba
          </ThemedText>
          <Image
            source={require("@/assets/images/car.png")}
            style={{ width: 105, height: 105 }}
          />
        </ThemedView>
      </ThemedView>
      <ThemedText type="title" style={{ paddingVertical: 40, paddingLeft: 10 }}>
        Viajes Recientes
      </ThemedText>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return <ThemedText>{item.title}</ThemedText>;
        }}
        keyExtractor={(item) => item.id}
      />
    </ThemedView>
  );
}
