import { ThemedView } from "@/components/ThemedView";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { TextInput } from "react-native";
import AvailableTrip from "@/components/TripsAvailable";
const Search = () => {
  const DATA = [
    {
      name: "Lucia Sanchez",
      time: "14:00",
      destination: "Facultad de informática",
    },
    {
      name: "Juan Olguin",
      time: "15:00",
      destination: "Facultad de informática",
    },
  ];
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ThemedView style={{ width: "100%", paddingHorizontal: 20 }}>
          <ThemedText style={{ textAlign: "left" }} type="title">
            Destino:
          </ThemedText>
          <TextInput
            style={{ fontSize: 28 }}
            placeholder="Seleccionar destino..."
          />
        </ThemedView>
        <ThemedView style={{ width: "100%", paddingHorizontal: 20 }}>
          <ThemedText style={{ textAlign: "left" }} type="subtitle">
            Transportes disponibles:
          </ThemedText>
          <ScrollView>
            <AvailableTrip
              id="WWW"
              name="Lucia Sanchez"
              time="14:00"
              destination="Facultad de informática"
              picture={
                "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg"
              }
            />
          </ScrollView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({});

export default Search;
