import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();
export default function Loginscreen() {
  useWarmUpBrowser();

  const { startOAuthFlow: startoAuthFlowGmail } = useOAuth({
    strategy: "oauth_google",
  });
  const { startOAuthFlow: startoAuthFlowFaceBook } = useOAuth({
    strategy: "oauth_facebook",
  });

  const onPressGmail = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startoAuthFlowGmail();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [startoAuthFlowGmail]);
  const onPressFaceBook = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startoAuthFlowFaceBook();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [startoAuthFlowFaceBook]);

  return (
    <View style={{ display: "flex", alignItems: "center", marginTop: 100 }}>
      <Image
        source={require("@/assets/images/anh1.jpg")}
        style={{
          height: 450,
          width: 220,
          marginLeft: 8,
          borderRadius: 20,
          borderColor: "#000",
          borderWidth: 6,
        }}
      ></Image>
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-medium",
            textAlign: "center",
          }}
        >
          Your ultimate{" "}
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontSize: 28,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          VietNam Travel Companion
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: Colors.GRAY,
            fontFamily: "outfit",
            textAlign: "center",
            marginVertical: 15,
          }}
        >
          "Discover the Wonders of Vietnam with Our Ultimate Travel App"
        </Text>
        <View>
          <Text
            style={{
              fontFamily: "outfit-medium",
              textAlign: "center",
              marginVertical: 10,
              fontSize:20
            }}
          >
            Sign up with
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity onPress={onPressGmail} style={styles.logoLogin}>
            <Image
              style={styles.logoLogin}
              source={require("@/assets/images/login_google.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressFaceBook}>
            <Image
              style={styles.logoLogin}
              source={require("@/assets/images/login_facebook.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -20,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    margin: 10,
    borderRadius: 50,
    display: "flex",
    textAlign: "center",
    color: "white",
  },
  logoLogin: {
    display: "flex",
    width: 150,
    height: 50,
    objectFit: "cover",
    borderRadius: 5,
  },
});
