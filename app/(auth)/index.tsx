import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const Index = () => {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    const emailValid = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    ).test(email);
    if (!emailValid) {
      setInvalidEmail(true);
      return;
    }
    setInvalidEmail(false);
    router.push("/(tabs)");
  };
  return (
    <ThemedView
      style={{
        paddingTop: 40,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Image
        source={require("@/assets/images/troya-logo.png")}
        style={{ width: 220, height: 220, alignSelf: "center" }}
      />
      <Text style={{ color: "white" }}>Waos</Text>
      <View style={{ marginHorizontal: 40 }}>
        <ThemedText style={{ paddingVertical: 5 }}>
          Correo electrónico
        </ThemedText>
        <TextInput
          keyboardType="email-address"
          placeholder="Ingresar correo electrónico"
          style={{
            borderColor: invalidEmail ? "red" : "black",
            borderWidth: 2,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => {
            setEmail(text);
          }}
          onBlur={() => {
            const emailValid = new RegExp(
              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            ).test(email);
            if (!emailValid) {
              setInvalidEmail(true);
              return;
            }
            setInvalidEmail(false);
          }}
        />
      </View>
      <View style={{ marginHorizontal: 40 }}>
        <ThemedText style={{ paddingVertical: 5 }}>Contraseña</ThemedText>
        <TextInput
          placeholder="Ingresar contraseña"
          keyboardType="default"
          secureTextEntry={true}
          style={{
            borderColor: "black",
            borderWidth: 2,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: "#1A5FEF",
            borderColor: "#1A5FEF",
            borderWidth: 2,
            width: 200,
            marginVertical: 10,
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
            onPress={onSubmit}
          >
            Ingresar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            borderColor: "#1A5FEF",
            borderWidth: 2,
            width: 200,
            marginVertical: 10,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              paddingVertical: 10,
              fontSize: 20,
              alignSelf: "center",
            }}
            onPress={onSubmit}
          >
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

export default Index;
