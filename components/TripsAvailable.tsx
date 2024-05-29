import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Image } from "react-native";
import { Link } from "expo-router";
type Props = {
  id: string;
  name: string;
  picture: any;
  time: string;
  destination: string;
};
export default function AvailableTrip({
  id = "0",
  name = "Alfonso Rodriguez",
  picture,
  time = "12:00",
  destination = "Facultad de informática",
}: Props) {
  return (
    <ThemedView
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
      <Link
        href={{
          pathname: "/trip",
          params: {
            id: id,
          },
        }}
        accessibilityLabel={"Viaje con " + name + " a las " + time}
      >
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
        </ThemedView>
      </Link>
    </ThemedView>
  );
}
