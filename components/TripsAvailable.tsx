import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Image } from "react-native";
import { useState } from "react";
import { Link, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
type Props = {
  id: string;
  name: string;
  picture: any;
  time: string;
  destination: string;
  selected: string;
  setSelected: any;
  start: any;
};
export default function AvailableTrip({
  id = "0",
  name = "Alfonso Rodriguez",
  picture,
  time = "12:00",
  destination = "Facultad de informática",
  start = "El Rosario",
  selected,
  setSelected,
}: Props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    onLongPress={() => navigation.navigate("trip", { id: id })}
      onPress={() => {
        if (selected == id) {
          setSelected("");
        } else {
          setSelected(id);
        }
      }}
      style={{
        backgroundColor: "white",
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: selected == id ? "blue" : "white",
      }}
    >
      <Image
        source={{
          uri: picture,
        }}
        style={{
          width: 105,
          height: 105,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      />
      <ThemedView>
        <ThemedText
          type="subtitle"
          style={{
            textAlign: "left",
            paddingLeft: 10,
          }}
        >
          {name}
        </ThemedText>
        <ThemedText
          type="default"
          style={{
            textAlign: "left",
            paddingLeft: 10,
            fontSize: 12,
          }}
        >
          Hora: {time}
        </ThemedText>
        <ThemedText
          type="default"
          style={{
            textAlign: "left",
            paddingLeft: 10,
            maxWidth: 240,
            fontSize: 12,
          }}
        >
          Destino: {destination}
        </ThemedText>
        <ThemedText
          type="default"
          style={{
            textAlign: "left",
            paddingLeft: 10,
            maxWidth: 240,
            fontSize: 12,
          }}
        >
          Inicio: {start}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}
