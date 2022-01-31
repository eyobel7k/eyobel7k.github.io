import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Linking,
} from "react-native";

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendContactForm = () => {
    let mailto = `mailto:elegese@alphaworks.tech`;
    mailto += `?subject=${subject}`;
    mailto += `& body=${message}`;
    Linking.openURL(mailto)
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.h1}>Contact Eyob</Text>

        <View>
          <Text style={styles.font}>Your Name*</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setName(e)}
            value={name}
            placeholder="Insert your text!"
          />
        </View>

        <View>
          <Text style={styles.font}>Subject*</Text>
          <TextInput
            style={styles.input}
              onChangeText={text => setSubject(text)}
              value={subject}
            placeholder="Insert your text!"
          />
        </View>

        <View>
          <Text htmlFor="name" style={styles.font}>Your Message</Text>
          <TextInput
            style={styles.input1}
              onChangeText={text => setMessage(text)}
            value={message}
            placeholder="Insert your text!"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        <Pressable onPress={sendContactForm}>
          <View>
            <Text style={styles.font}>Submit</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop:90
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop:20,
  },
  bold: {
    fontWeight: "bold",
  },
  p: {
    marginBottom: 20,
    fontSize:20
  },
  input: {
    height: 50,
    borderColor: "green",
    borderWidth: 2,
    color: "gray",
    width:300,
    alignContent:'center'
  },
  input1: {
    width: 300,
    borderColor: "gray",
    borderWidth: 2,
    color: "gray",
    height:100,
    borderColor: "green",
  },
  font:{
    fontSize:20,
    fontWeight:'bold',
    borderColor:'black'
  }
});
export default Contact;