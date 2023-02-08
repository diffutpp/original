import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Region, Marker, PROVIDER_GOOGLE } from "react-native-maps";
const API_KEY = process.env.API_KEY;
const URL = process.env.URL;
import axios from "axios";
//import { createErrorHandler } from "expo/build/errors/ExpoErrorManager";
//Vue.prototype.$axios = axios;
//ここから
// let jsonObj;
// const http = new XMLHttpRequest();
// http.open("GET", URL);
// http.send();
// http.onreadystatechange = () => {
//   if (http.readyState == 4 && http.status == 200) {
//     // jsonをオブジェクトに変更
//     jsonObj = JSON.parse(http.responseText);
//   }
// };
//ここまでXML

const OriMap = () => {
  const [pin, setPin] = useState({
    //useStateでmeを宣言、movMeで更新していく
    latitude: 41.068564, //初期化、仮置きで未来大
    longitude: 141.3507138,
  });
  useEffect(
    () => {
      //ここでどうにかして現在地（緯度と経度？）を取得する,
      //ここではトライキャッチできない
    },
    [] /*<=ここに更新条件を入れる) */
  );

  return (
    <View style={styles.container}>
      <MapView //参考：https://jpdebug.com/p/2843769
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 41.068564, //中心点,適当に札幌
          longitude: 141.3507138,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        minZoomLevel={9} //初期縮尺レベル
        maxZoomLevel={30}
        showsUserLocation={true} //?
      >
        {pin.map((item) => {
          return (
            <Marker
              pinColor={"red"}
              key={item.id} // データidをインデックスに
              title={item.name}//要らない気もする
              coordinate={{
                latitude: Number(item.latitude), // 緯度経度を数値型に変換
                longitude: Number(item.longitude),
              }}
            >
              <View>
                <Text>{item.name} // ピンをタップしたときに表示させる</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};
export default OriMap; //外で使うために書くやつ

const styles = StyleSheet.create({
  //スタイルシート
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
