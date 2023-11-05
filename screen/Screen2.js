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

const Screen2 = ({ navigation }) => {
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
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data
          .filter((item) => {
            return item.id == 1;
          })
          .map((item) => {
            return (
              <View style={{ flex: 1 }}>
                <Image
                  source={require("../assets/Icon Button 11.png")}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                ></Image>

                <View
                  style={{
                    flexDirection: "row",
                    position: "absolute",
                    top: 20,
                    right: 5,
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
                </View>
                <TextInput
                  style={{
                    width: 334,
                    height: 44,
                    borderRadius: 4,
                    borderWidth: 1,
                    marginTop: 40,
                    paddingLeft: 50,
                  }}
                  placeholder="Search"
                ></TextInput>
                <Image
                  source={require("../assets/Frame (1).png")}
                  style={{
                    width: 24,
                    height: 24,
                    position: "absolute",
                    left: 10,
                    top: 100,
                  }}
                  resizeMode="contain"
                ></Image>
                <View style={{ marginTop: 50 }}>
                  {item.task.map((item) => {
                    return (
                      <ScrollView>
                        <View
                          key={item.id}
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: 335,
                            height: 48,
                            borderRadius: 24,
                            backgroundColor: "#DEE1E678",
                            margin: 10,
                          }}
                        >
                          <Image
                            source={require("../assets/Frame (2).png")}
                            style={{
                              width: 24,
                              height: 24,
                              position: "absolute",
                              left: 20,
                            }}
                            resizeMode="contain"
                          ></Image>
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontSize: 16,
                              fontWeight: 700,
                            }}
                          >
                            {item.name}
                          </Text>
                          <Image
                            source={require("../assets/Frame (3).png")}
                            style={{
                              width: 24,
                              height: 24,
                              position: "absolute",
                              right: 20,
                            }}
                            resizeMode="contain"
                          ></Image>
                        </View>
                      </ScrollView>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Screen3")}
                  style={{ alignItems: "center", marginTop: 20 }}
                >
                  <Image
                    source={require("../assets/Group 13.png")}
                    style={{ width: 69, height: 69 }}
                    resizeMode="contain"
                  ></Image>
                </TouchableOpacity>
              </View>
            );
          })

        //  console.log(data)
      )}
    </View>
  );
};

export default Screen2;
