import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Hi, I'm <Text style={styles.green}>Eyobel</Text>
      </Text>
      <Text style={styles.p}>
        A skilled and passionate Frontend web developer based in San Jose, CA{" "}
      </Text>
      <Text style={styles.project}>Have a project?</Text>

      <Image
        style={styles.eyoba}
        source={require("../assets/eyoba.png")}
        alt=""
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 40,
    flex: 1,
  
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  green: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
    color: "green",
  },
  p: {
    // marginBottom: 20,
    marginLeft: 10,
    alignSelf: "center",
    fontSize:18,
    marginTop:15
  },
  eyoba: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  project:{
    fontSize:20,
    textAlign:'center',
    marginTop:10,
    fontWeight:'bold'
  }
});
