import {
  Text,
  Image,
  StyleSheet,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import PreviousTrip from "@/components/PreviousTrip";

export default function HomeScreen() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Alfonso Rodriguez",
      time: "12:00",
      destination: "Facultad de informática",
      picture: "@/assets/images/alfonso.png",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Lucia Sanchez",
      time: "14:00",
      destination: "Facultad de informática",
      picture: "@/assets/images/lucia.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Alicia Ramirez Pérez",
      time: "15:00",
      destination: "Facultad de informática",
      picture: "@/assets/images/alisa.png",
    },
  ];
  return (
    <ThemedView
      style={{
        paddingVertical: 40,
        height: "100%",
        backgroundColor: "#F6F7F9",
      }}
    >
      <Image
        source={require("@/assets/images/troya-logo.png")}
        style={{ width: 60, height: 60, marginLeft: 30 }}
      />
      <ThemedText type="title" style={{ paddingVertical: 20, paddingLeft: 10 }}>
        Bienvenido
      </ThemedText>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          backgroundColor: "#F6F7F9",
        }}
      >
        <Link
          href={"(tabs)/search"}
          style={{
            alignSelf: "center",
            backgroundColor: "#6985C0",
            borderRadius: 10,
          }}
        >
          <ThemedView
            style={{
              backgroundColor: "#6985C0",
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ThemedText
              type="subtitle"
              style={{ color: "white", fontSize: 30 }}
            >
              Buscar Viaje
            </ThemedText>
            <Image
              source={require("@/assets/images/lupa.png")}
              style={{ width: 105, height: 105 }}
            />
          </ThemedView>
        </Link>
        <Link href={"/add"} style={{ alignSelf: "center" }}>
          <ThemedView
            style={{
              backgroundColor: "#6F92BF",
              borderRadius: 10,
              paddingHorizontal: 30,
              gap: 20,
              paddingVertical: 10,
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ThemedText
              type="subtitle"
              style={{ color: "white", fontSize: 30 }}
            >
              Crear Viaje
            </ThemedText>
            <Image
              source={require("@/assets/images/car.png")}
              style={{ width: 105, height: 105 }}
            />
          </ThemedView>
        </Link>
      </ThemedView>
      <ThemedText type="title" style={{ paddingVertical: 40, paddingLeft: 10 }}>
        Viajes Recientes
      </ThemedText>
      <ScrollView>
        <PreviousTrip
          id={DATA[0].id}
          name={DATA[0].name}
          destination={DATA[0].destination}
          time={DATA[0].time}
          picture={require("@/assets/images/trips/alfonso.png")}
        />
        <PreviousTrip
          id={DATA[1].id}
          name={DATA[1].name}
          destination={DATA[1].destination}
          time={DATA[1].time}
          picture={require("@/assets/images/trips/lucia.png")}
        />
        <PreviousTrip
          id={DATA[2].id}
          name={DATA[2].name}
          destination={DATA[2].destination}
          time={DATA[2].time}
          picture={require("@/assets/images/trips/alisa.png")}
        />
      </ScrollView>
    </ThemedView>
  );
}
