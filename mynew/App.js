import { StyleSheet, Text, View, Dimensions } from "react-native";
// const API_KEY = process.env.API_KEY;
// const URL = process.env.URL;
import OriMap from './com/OriMap'



export default function App() {
  return (
    <View style={styles.container}>
      <OriMap/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
