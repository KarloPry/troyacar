import { useState } from "react";
import React from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
const Other = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const onSubmit = () => {
    console.log("Register?");
  };
  return (
    <ThemedView
      style={{
        height: "100%",
        paddingTop: 40,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("@/assets/images/troya-logo.png")}
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />
      <View style={{ marginHorizontal: 40, display: "flex", gap: 10 }}>
        <TextInput
          placeholder="Ingresar nombre"
          keyboardType="default"
          style={{
            borderColor: "#BECCEA",
            borderWidth: 2,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <TextInput
          placeholder="Ingresar contraseña"
          keyboardType="default"
          style={{
            borderColor: "#BECCEA",
            borderWidth: 2,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TextInput
          placeholder="Ingresar contraseña"
          keyboardType="default"
          secureTextEntry={true}
          style={{
            borderColor: "#BECCEA",
            borderWidth: 2,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TextInput
          placeholder="Volver a ingresar contraseña"
          keyboardType="default"
          secureTextEntry={true}
          style={{
            borderColor: "#BECCEA",
            borderWidth: 2,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => {
            setConfirmPassword(text);
          }}
        />
        <TextInput
          placeholder="Ingresar correo"
          keyboardType="email-address"
          style={{
            borderColor: "#BECCEA",
            borderWidth: 2,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TextInput
          placeholder="Número de teléfono"
          keyboardType="phone-pad"
          style={{
            borderColor: "#BECCEA",
            borderWidth: 2,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 10,
          backgroundColor: "#1A5FEF",
          borderColor: "#1A5FEF",
          borderWidth: 2,
          width: 200,
          marginVertical: 20,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            paddingVertical: 10,
            fontSize: 20,
            alignSelf: "center",
          }}
          onPress={() => router.push("(tabs)")}
        >
          Registrarse
        </Text>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Other;
