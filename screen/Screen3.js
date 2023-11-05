import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

const Screen3 = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://6544aecc5a0b4b04436cbb37.mockapi.io/todo"
      );
      const json = await response.json();
      setData(json);
      console.log(json.tasks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return data
    .filter((item) => {
      return item.id == 1;
    })
    .map((item) => {
      return (
        <View>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              top: 20,
              left: 20,
            }}
          >
            <Image
              source={item.avatar}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            ></Image>
            <View style={{ marginLeft: 10, alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "Inter",
                  fontSize: 16,
                  fontWeight: 700,
                  left: 10,
                }}
              >
                Hi {item.name}
              </Text>
              <Text
                style={{
                  fontFamily: "Epilogue",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#00000084",
                }}
              >
                Have agrate day head
              </Text>
            </View>
            <Image
              source={require("../assets/Icon Button 11.png")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginLeft: 110,
              }}
            ></Image>
          </View>

          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              marginTop: 100,
              fontWeight: 700,
            }}
          >
            ADD YOUR JOB
          </Text>

          <View
            style={{
              flexDirection: "row",
              border: "1px solid black",
              width: 350,
              height: 40,
              marginLeft: 20,
              marginTop: 35,
            }}
          >
            <Image
              style={{ height: 25, width: 25, marginTop: 7, marginLeft: 10 }}
              source={require("../assets/Frame (4).png")}
            ></Image>
            <TextInput
              style={{ height: 40, width: 200, marginLeft: 10 }}
              placeholder="input your job"
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#00BDD6",
              height: 44,
              width: 190,
              borderRadius: 12,
              marginLeft: 100,
              marginTop: 55,
            }}
            onPress={() => navigation.navigate("Screen1")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                lineHeight: 26,
                fontFamily: "Inter",
                fontWeight: 400,
                textAlign: "center",
                marginTop: 8,
              }}
            >
              FINISH
            </Text>
          </TouchableOpacity>
          <Image
            style={{ height: 200, width: 200, marginTop: 60, marginLeft: 100 }}
            source={require("../assets/Image 96.png")}
          ></Image>
        </View>
      );
    });
};

export default Screen3;
