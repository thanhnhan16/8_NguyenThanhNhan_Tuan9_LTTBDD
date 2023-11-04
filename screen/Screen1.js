import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MANAGE YOUR</Text>
      <Text style={styles.text}>TASK</Text>
      <StatusBar style="auto" />

      <View style={styles.g1}>
        <Image style={styles.img} source={require("../assets/Frame.png")} />
        <TextInput
          style={styles.input}
          placeholder={"Enter your name"}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.textbutton}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#8353E2",
    fontSize: "24px",
    fontFamily: "Epilogue",
    fontWeight: "700",
    lineHeight: "36px",
    textAlign: "center",
  },
  input: {
    width: "300px",
    height: "43px",
    color: "#BCC1CA",
  },
  img: {
    width: "20px",
    height: "20px",
    margin: 10,
    // marginLeft:3
  },
  g1: {
    flexDirection: "row",
    border: "1px solid #9095A0",
    borderRadius: "12px",
    marginTop: "100px",
  },
  textbutton: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "26px",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 8,
  },
  button: {
    width: "190px",
    height: "44px",
    borderRadius: "12px",
    backgroundColor: "#00BDD6",
    marginTop: "100px",
  },
});
