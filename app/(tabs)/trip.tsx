import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const Trip = () => {
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
      <ThemedView style={{ backgroundColor: "#F6F7F9" }}>
        <ThemedText
          style={{
            fontSize: 24,
            marginTop: 10,
            height: 40,
            textAlign: "center",
          }}
        >
          Conductor
        </ThemedText>
        <ThemedView
          style={{
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 30,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/KarloPry/troyacar/main/assets/images/trips/lucia.png",
            }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
          <ThemedView
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <ThemedText
              style={{
                paddingLeft: 10,
                fontSize: 24,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              Lucia Sanchez
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView style={{ backgroundColor: "#F6F7F9" }}>
          <ThemedText style={{ marginLeft: 20, fontSize: 30, paddingTop: 20 }}>
            Pasajeros
          </ThemedText>
          <ThemedView
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              backgroundColor: "#F6F7F9",
            }}
          >
            <ThemedView
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 30,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/KarloPry/troyacar/main/assets/images/trips/carlos.png",
                }}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
              <ThemedText style={{ fontSize: 24, paddingLeft: 10 }}>
                Carlos Ortiz
              </ThemedText>
            </ThemedView>
            <ThemedView
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 30,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/KarloPry/troyacar/main/assets/images/trips/alisa.png",
                }}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
              <ThemedText style={{ fontSize: 24, paddingLeft: 10 }}>
                Alicia Ramirez Pérez
              </ThemedText>
            </ThemedView>
            <ThemedView
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 30,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/KarloPry/troyacar/main/assets/images/trips/juan.png",
                }}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
              <ThemedText style={{ fontSize: 24, paddingLeft: 10 }}>
                Juan Olguin
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView style={{ backgroundColor: "#F6F7F9" }}>
          <ThemedText style={{ marginLeft: 20, fontSize: 30, paddingTop: 20 }}>
            Destino
          </ThemedText>
          <ThemedView
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              backgroundColor: "#F6F7F9",
            }}
          >
            <ThemedView
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 30,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <ThemedText style={{ fontSize: 24, paddingLeft: 10 }}>
                Facultad de informática
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView style={{ backgroundColor: "#F6F7F9" }}>
          <ThemedText style={{ marginLeft: 20, fontSize: 30, paddingTop: 20 }}>
            Inicio
          </ThemedText>
          <ThemedView
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              backgroundColor: "#F6F7F9",
            }}
          >
            <ThemedView
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 30,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <ThemedText style={{ fontSize: 24, paddingLeft: 10 }}>
                Hércules a las 14:00
              </ThemedText> 
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default Trip;
