import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native";
const Add = () => {
  const [destination, setDestination] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
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
      <ThemedText style={{ fontSize: 28, paddingTop: 20, marginLeft: 20 }}>
        Destino:
      </ThemedText>
      <Picker
        onValueChange={(item) => setDestination(item)}
        selectedValue={destination}
        style={{
          marginHorizontal: 20,
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <Picker.Item label="Centro Universitario" value="cu" />
        <Picker.Item label="Facultad de informática" value="fif" />
      </Picker>
      <ThemedText
        type="subtitle"
        style={{ fontSize: 30, marginLeft: 20, paddingTop: 10 }}
      >
        Inicio
      </ThemedText>
      <TextInput
        placeholder="La paz 22..."
        style={{
          backgroundColor: "white",
          paddingVertical: 8,
          fontSize: 24,
          marginHorizontal: 20,
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          paddingHorizontal: 10
        }}
      />
      <ThemedText
        type="subtitle"
        style={{ fontSize: 30, marginLeft: 20, paddingTop: 10 }}
      >
        Hora de partida
      </ThemedText>
      <TextInput
        placeholder="12:00..."
        style={{
          backgroundColor: "white",
          paddingVertical: 8,
          fontSize: 24,
          marginHorizontal: 20,
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          paddingHorizontal: 10
        }}
      />
      <ThemedText
        type="subtitle"
        style={{ fontSize: 30, marginLeft: 20, paddingTop: 10 }}
      >
        Tolerancia
      </ThemedText>
      <TextInput
        placeholder="5 minutos..."
        style={{
          backgroundColor: "white",
          paddingVertical: 8,
          fontSize: 24,
          marginHorizontal: 20,
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          paddingHorizontal: 10
        }}
      />
      <ThemedText
        type="subtitle"
        style={{ fontSize: 30, marginLeft: 20, paddingTop: 10 }}
      >
        Pago
      </ThemedText>
      <TextInput
        placeholder="$20.00"
        defaultValue="$20.00"
        style={{
          backgroundColor: "white",
          paddingVertical: 8,
          fontSize: 24,
          marginHorizontal: 20,
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          paddingHorizontal: 10
        }}
      />
      <ThemedText style={{ fontSize: 28, paddingTop: 20, marginLeft: 20 }}>
        Método de pago:
      </ThemedText>
      <Picker
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          backgroundColor: "white",
          borderRadius: 20,
        }}
        selectedValue={metodoPago}
        onValueChange={(item) => setMetodoPago(item)}
      >
        <Picker.Item label="Efectivo" value="efectivo" />
        <Picker.Item label="Tarjeta" value="tarjeta" />
      </Picker>
      <TouchableOpacity>
        <ThemedText
          style={{
            backgroundColor: "#1A5FEF",
            paddingVertical: 16,
            paddingHorizontal: 40,
            borderRadius: 10,
            color: "white",
            fontSize: 20,
            textAlign: "center",
            marginHorizontal: 20,
            marginVertical: 20,
          }}
        >
          Crear Viaje
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Add;
