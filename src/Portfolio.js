import {View, Text,StyleSheet,Image, ScrollView} from 'react-native';
import Marvel from '../assets/Marvel.png'
import Haunted from '../assets/Haunted.png'
import Decidr from '../assets/Decidr.png'
import Ecard from '../assets/Ecard.png'

export default function Portfolio(){

  return (
    <ScrollView>
 <View style={styles.container}>
   <Text style={styles.portfolio}>Portfolio</Text>
          <Text style={styles.portfolioSub}>Some of my best works</Text>
          <View>
            <View>
                 <View>
                  <Image
                    style={styles.marvel}
                    source={Marvel}
                    alt=""
                  />
                  <Text style={styles.Marvel}>Marvel Space</Text>
                  <Text>
                       React-Native components for Android and web applications. A
                    user will be able to customize the theme for their MySpace
                    page, create an account, send messages, friend requests,
                    post pictures, add feed posts and search for profiles
                  </Text>
                </View> 
            </View>
            
              <View>
                <View>
                   <Image
                   style={styles.haunted}
                   source={Haunted}
                    alt=""
                  /> 
                  <Text style={styles.Haunted}>Haunted House</Text>
                  <Text>
                    Haunted house is an interactive Halloween themed game built
                    using React. During trick-or-treating, the players end up
                    stuck in a haunted house. To get out of the haunted house,
                    they need to find the key, but first they must explore each
                    room and complete the challenges to find the silver key.
                  </Text>
                </View>
              </View>
           
            <View>
              <View>
                <View>
                   <Image
                    style={styles.decidr}
                    source={Decidr}
                    alt=""
                  /> 
                  <Text style={styles.Decidr}> Decidr</Text>
                  <Text>
                    The Decider app was developed using React. This app is
                    designed to help users select from an arbitrary list of
                    options. Users can add and remove options from the list at
                    any time. Once the user is done, the app selects a random
                    option from the list. Responsive on both mobile and desktop
                  </Text>                 
                </View>
              </View>
            </View>
            <View>
              <View>
                <View>
                  <Image
                    style={styles.ecard}
                    source={Ecard}
                    alt=""
                  />
                  <Text style={styles.Ecard}>ecard</Text>
                  <Text>
                    A React app that creates custom greeting cards for the
                    holiday season. It is easy to customize and reshare with
                    friends and family. Responsive on both mobile devices and
                    web pages.See it in action by clicking the live demo and
                    start resharing
                  </Text>
                </View>
              </View>
            </View>
          </View>
    
</View>
</ScrollView>
  )
}
const styles= StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    alignItems:'flex-start',
    flexDirection:'column',
    alignItems: "center",
  },
  marvel:{
    width:150,
    height:150,
    alignSelf:'center',
    
    
  },
  haunted:{
    width:150,
    height:150,
    alignSelf:'center',
    marginTop:15
    
    
  },
  decidr:{
    width:150,
    height:150,
    alignSelf:'center',
    marginTop:15
    
  },
  ecard:{
    width:150,
    height:150,
    alignSelf:'center',
    marginTop:15
  },
  portfolio:{
    textAlign:'center',
    fontSize:35,
    fontWeight: 'bold',
    marginTop:15
  },
  portfolioSub:{
    marginTop:10,
    fontSize:30,
    fontWeight:'bold',
    marginBottom:15
  },
  Marvel:{
    textAlign:'center',
    fontWeight:'bold',
    marginTop:20,
    fontSize:20,
  },
  Haunted:{
    textAlign:'center',
    fontWeight:'bold',
    marginTop:20,
    fontSize:20,
  },
  Decidr:{
    textAlign:'center',
    fontWeight:'bold',
    marginTop:20,
    fontSize:20,
  },
  Ecard:{
    textAlign:'center',
    fontWeight:'bold',
    marginTop:20,
    fontSize:20,
  },
})