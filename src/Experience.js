import { View, Text, StyleSheet, Image } from "react-native";

export default function Experience() {
  return (
    <View style={styles.container}>
      <Text style={styles.p1}> Experience</Text>
      <Text style={styles.p}>REACT-NATIVE APPRENTICE</Text>
      <Text style={styles.p}>ALPHAWORKS </Text>
      <Text style={styles.p}>September 2021 present</Text>
      <Text style={styles.p}>
        Alphaworks' Apprenticeship program is designed to help bridge the gap
        between learning and working in the technology industry. Apprentices are
        given relevant projects to work on under the supervision of seasoned
        technical leads.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop:100
   
   
    
  },

  undraw: {
    width: 350,
    height: 400,
    alignSelf: "center",
  },
  p:{
    marginBottom:20,
    marginLeft:10,
    alignSelf:'center',
    marginTop:20
  },
  p1:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:20,
    marginLeft:10,
    alignSelf:'center',
    marginTop:20
    
  },
});
