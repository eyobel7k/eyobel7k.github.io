import {View, Text,StyleSheet,Image} from 'react-native';


export default function Footer(){

  return (
 <View style={styles.container}>
   
   <Text>Copy Right :2022</Text>
                
   </View>


  )
}
const styles= StyleSheet.create({
  container:{
    backgroundColor:"#a2f5a2",
    alignItems:'center',
    justifyContent:'center',

    height:50,
    // position:'absolute',
    
    bottom:0,
    width:'100%',
    

    marginTop:160
    
  },
 
})