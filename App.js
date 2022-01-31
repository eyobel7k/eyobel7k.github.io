import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import Home from "./src/Home";
import About from "./src/About";
import Experience from "./src/Experience";
import Nav from "./src/Nav";
import Education from "./src/Education";
import Portfolio from "./src/Portfolio";
import Contact from "./src/Contact";
import Footer from "./src/Footer";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <View style={styles.container}>
      <ScrollView>
        <Nav setPage={setPage} />
        {page === "Home" && <Home />}
        {page === "Experience" && <Experience />}
        {page === "Portfolio" && <Portfolio />}
        {page === "Education" && <Education />}
        {page === "Contact" && <Contact />}
        {page === "About" && <About />}
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor:"#fff"
  
    
  },
});
