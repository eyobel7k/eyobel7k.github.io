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
          {/* <Text>Eyob</Text> */}
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
          <Text  style={styles.color}name="About">About</Text>
        </Pressable>
        <Pressable onPress={() => setPage("Experience")}>
          <Text style={styles.color} name="Experience">Experience</Text>
        </Pressable>
        <Pressable onPress={() => setPage("Education")}>
          <Text style={styles.color} name="Education">Education</Text>
        </Pressable>
        <Pressable onPress={() => setPage("Portfolio")}>
          <Text style={styles.color} name="Portfolio">Portfolio</Text>
        </Pressable>
        <Pressable onPress={() => setPage("Contact")}>
          <Text style={styles.color} name="Contact">Contact</Text>
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
    marginTop: 40,
    marginBottom: 35,
    paddingTop:20,
  },
  color:{
    color:'#000',
    fontSize:15
  }
});
