import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { TextInput } from "react-native";
import AvailableTrip from "@/components/TripsAvailable";
import { Picker } from "@react-native-picker/picker";
const Search = () => {
  const [payment, setPayment] = useState("");
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
    <ThemedView style={{ flex: 1, backgroundColor: "" }}>
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
          <ScrollView
            style={{ backgroundColor: "#F6F7F9", gap: 10, paddingVertical: 20 }}
          >
            <AvailableTrip
              id="WWW"
              name="Lucia Sanchez"
              time="14:00"
              destination="Facultad de informática"
              picture={
                "https://raw.githubusercontent.com/KarloPry/troyacar/main/assets/images/trips/lucia.png"
              }
            />
            <AvailableTrip
              id="WWWWW"
              name="Juan Olguin"
              time="15:00"
              destination="Facultad de informática"
              picture={
                "https://raw.githubusercontent.com/KarloPry/troyacar/main/assets/images/trips/juan.png"
              }
            />
          </ScrollView>
        </ThemedView>
        <ThemedView
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
            gap: 20,
          }}
        >
          <ThemedView
            style={{
              backgroundColor: "#F6F7F9",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <ThemedText type="subtitle">Pago:</ThemedText>
            <TextInput placeholder="$00.00" style={{ fontSize: 20 }} />
          </ThemedView>
          <ThemedView>
            <Picker
              style={{ width: 200, backgroundColor: "#F6F7F9" }}
              selectedValue={payment}
              onValueChange={(itemValue) => setPayment(itemValue)}
            >
              <Picker.Item label="Efectivo" value="efectivo" />
              <Picker.Item label="Tarjeta" value="tarjeta" />
            </Picker>
          </ThemedView>
        </ThemedView>
        <TouchableOpacity
          style={{
            backgroundColor: "#1A5FEF",
            paddingVertical: 16,
            paddingHorizontal: 40,
            borderRadius: 10,
          }}
        >
          <ThemedText style={{ color: "white", fontSize: 20 }}>Agendar</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({});

export default Search;
