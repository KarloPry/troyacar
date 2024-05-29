import { useState } from "react";
import { StyleSheet, Image, Platform, TextInput } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  const [payment, setPayment] = useState("card");
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
      <ThemedView
        style={{
          borderRadius: 10,
          backgroundColor: "#F6F7F9",
        }}
      >
        <ThemedView
          style={{
            alignSelf: "center",
            paddingHorizontal: 40,
            paddingVertical: 20,
            borderRadius: 5,
          }}
        >
          <Image
            style={{ width: 200, height: 200, borderRadius: 50, padding: 10 }}
            source={{
              uri: "https://raw.githubusercontent.com/KarloPry/troyacar/main/assets/images/trips/carlos.png",
            }}
          />
          <ThemedText
            type="title"
            style={{ textAlign: "center", paddingVertical: 20 }}
          >
            Carlos Ortiz
          </ThemedText>
        </ThemedView>
        <ThemedView
          style={{
            backgroundColor: "#F6F7F9",
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <ThemedText type="default" style={{ fontSize: 22 }}>
            Metodos de pago
          </ThemedText>
          <ThemedView style={{ borderRadius: 10, marginVertical: 10 }}>
            <Picker
              selectedValue={payment}
              style={{ height: 50, width: 370 }}
              onValueChange={(itemValue, itemIndex) => setPayment(itemValue)}
            >
              <Picker.Item label="Tarjeta" value="card" />
              <Picker.Item label="Efectivo" value="cash" />
            </Picker>
          </ThemedView>
          <ThemedText type="default" style={{ fontSize: 22 }}>
            Viajes
          </ThemedText>
          <ThemedView style={{ marginVertical: 10 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                borderColor: "blue",
                borderWidth: 2,
                borderRadius: 6,
              }}
            >
              <Link
                href={"/(tabs)/history"}
                style={{ textAlign: "center", fontSize: 20 }}
              >
                Ver historial
              </Link>
            </TouchableOpacity>
          </ThemedView>
          <ThemedText type="default" style={{ fontSize: 22 }}>
            Vehículo
          </ThemedText>
          <ThemedView style={{ marginVertical: 10 }}>
            <TextInput
              defaultValue="Toyota Corolla Rojo"
              placeholder="Descripción..."
              style={{
                borderWidth: 2,
                borderRadius: 6,
                padding: 10,
                fontSize: 20,
              }}
            />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
