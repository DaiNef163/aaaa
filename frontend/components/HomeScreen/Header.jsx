import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View style={styles.nameUser}>
        <Image source={{ uri: user?.imageUrl }} style={styles.avatar}></Image>
        <View>
          <Text style={{ color: "#fff" }}>Welcome</Text>
          <Text
            style={{ fontFamily: "outfit-medium", fontSize: 19, color: "#fff" }}
          >
            {user.fullName}
          </Text>
        </View>
      </View>
      <View style={styles.seacrh}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder="Search..." style={{fontFamily:'outfit'}}></TextInput>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  nameUser: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    gap: 10,
  },
  textFullName: {
    color: "#fff",
  },
  seacrh: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    marginTop: 15,
    borderRadius: 8,
    color:Colors.PRIMARY,
  },
});
