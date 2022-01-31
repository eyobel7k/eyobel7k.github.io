import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";

function Nav({ setPage }) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Pressable onPress={() => setPage("Home")}>
          <View>
            <View>
          <Text>Eyob</Text>
          </View>
          </View>
        </Pressable>
        <Pressable onPress={() => setPage("Home")}>
          <View>
            <View>
          <Text>Home</Text>
          </View>
          </View>
        </Pressable>

        <Pressable onPress={() => setPage("About")}>
          <Text name="About">About</Text>
        </Pressable>
        <Pressable onPress={() => setPage("Experience")}>
          <Text name="Experience">Experience</Text>
        </Pressable>
        <Pressable onPress={() => setPage("Education")}>
          <Text name="Education">Education</Text>
        </Pressable>
        <Pressable onPress={() => setPage("Portfolio")}>
          <Text name="Portfolio">Portfolio</Text>
        </Pressable>
        <Pressable onPress={() => setPage("Contact")}>
          <Text name="Contact">Contact</Text>
        </Pressable>
      </View>
    </View>
    </SafeAreaView>
  );
}
export default Nav;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a2f5a2",
    justifyContent: "center",
   
  },
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 35,
    marginBottom: 35,
    paddingTop:20
  },
});
