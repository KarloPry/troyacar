import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Collapsible } from "@/components/Collapsible";
const History = () => {
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
        Historial
      </ThemedText>
      <ThemedView
        style={{
          marginHorizontal: 40,
          borderRadius: 20,
          display: "flex",
          gap: 10,
          backgroundColor: "#F6F7F9",
        }}
      >
        <Collapsible title="Viaje 14/12/2021">
          <ThemedView
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <ThemedText type="default">Conductor: Marco Rodriguez</ThemedText>
            <ThemedText type="default">
              {
                "Pasajeros: Emanuel Pérez\n                    Luis Angel\n                    Ricardo Ortiz"
              }
            </ThemedText>
            <ThemedText type="default">Inicio de ruta: El Pueblito</ThemedText>
            <ThemedText type="default">
              Destino: Facultad de informática
            </ThemedText>
            <ThemedText type="default">Fecha: 14/12/2021</ThemedText>
            <ThemedText type="default">Precio: $80</ThemedText>
          </ThemedView>
        </Collapsible>
        <Collapsible title="Viaje 12/12/2021">
          <ThemedView
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <ThemedText type="default">Conductor: Diego Molina</ThemedText>
            <ThemedText type="default">
              {
                "Pasajeros: Javier Soto\n                    Luis Angel\n                    Carlos Ortiz"
              }
            </ThemedText>
            <ThemedText type="default">Inicio de ruta: El Pueblito</ThemedText>
            <ThemedText type="default">
              Destino: Facultad de informática
            </ThemedText>
            <ThemedText type="default">Fecha: 12/12/2021</ThemedText>
            <ThemedText type="default">Precio: $100</ThemedText>
          </ThemedView>
        </Collapsible>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({});

export default History;
