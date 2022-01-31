import { View, Text, StyleSheet, Image } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>About Me</Text>
     
      <Text style={styles.p}>
        I am experienced in building and maintaining responsive websites and
        mobile applications
      </Text>

      <Text style={styles.p}>
        I have exceptional analytical and problem-solving skills with enthusiasm
        and ambition tо complete projects tо the highest standard.{" "}
      </Text>
      <Text style={styles.p}>
        I have experience in designing and developing mobile and web
        applications using React Native, React.Js, JavaScript, HTML5, CSS and
        Bootstrap
      </Text>
      <Text style={styles.p}>
        My positive attitude and excellent teamwork skills enable me to deliver
        projects on time while collaborating with cross-functional teams.
      </Text>
      <Image
        style={styles.Aboutt} 
         source={require('../assets/Aboutt.jpg')}
         alt="" />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
    flex: 1,
  },
 
  h2: {
    fontSize: 30,
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
  },
  p: {
    marginTop: 15,
    marginLeft: 10,
    alignSelf: "center",
    color: "#000",
  },
  Aboutt:{
    width:300,
    height:300,
    alignSelf:'center',

    
   
  },


});
