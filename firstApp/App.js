import {
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Platform,
  StatusBar
} from "react-native";

export default function App() {
  // console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseFont}>Hii React Native! This is Agnivesh.</Text>
      <Image source={require("./assets/icon.png")} style={styles.imageStyle} />
      <TouchableOpacity onPress={()=> console.log("image clicked")}>
        <Image
        style={{padding: 20, margin: 20}}
        borderRadius={100}
          fadeDuration={1000}
          blurRadius={15}
          source={{
            width: 200,
            height: 200,
            uri: "https://media.licdn.com/dms/image/D4D03AQHM7nAhoNdEWA/profile-displayphoto-shrink_800_800/0/1672151466526?e=2147483647&v=beta&t=j6WOcDDvwu_6uWUzgvHtTNRTHRQOPCK_tZjzkePqk0U",
          }}
        />
      </TouchableOpacity>
      
      {/* <Button title="Click me!" onPress={()=> alert("Btn clicked!")}  /> */}
      <Button title="Click me!" onPress={()=> Alert.prompt("Details", "Wgat's your age?", (text)=> console.log(text))}  />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
 
// the purpose of using this StyleSheet API insted of plane javascript object is that
// it prevents misspelling by providing errrs, while plane javascript does not shows errors
const styles = StyleSheet.create({
  //this styles may look like css but they are javascript
  container: {
    flex: 1,
    backgroundColor: "orange",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0,
  },
  baseFont: {
    // fontFamily: 'Cochin'
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
});
