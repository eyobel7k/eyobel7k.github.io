import { View, Text, StyleSheet, Image } from "react-native";

export default function Education() {
  return (
    <View style={styles.container}>
      <Text style={styles.education}> Education</Text>

      
        <Text style={styles.p}>Full Stack Web development</Text>
        <Text style={styles.p}>Evangadi Networks </Text>
        <Text style={styles.p}>September 2020</Text>
        <Text style={styles.p}>
          Learned to convert HTML and CSS static websites to dynamic web pages
          using JavaScript and latest web development technologies (React and
          Node)
        </Text>
        <Text style={styles.p}>Accounting</Text>
        <Text style={styles.p}>Cal Poly Pomona</Text>
        <Text style={styles.p}>August 2015</Text>
        <Text style={styles.p}>Bachelor of Science: Business Administration, Accounting</Text>
      
      
        
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop:50
    
  },

  eyob2: {
    width: 50,
   height:50,
    flex: 1,
    alignSelf: "center",
  },
  p:{
    marginBottom:20,
    marginLeft:10,
    alignSelf:'center',
  },
  education:{
    textAlign:'center',
    fontSize:35,
    fontWeight: 'bold',
    marginTop:15


  }
});
