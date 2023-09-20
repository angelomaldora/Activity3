import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Main = () => {
  const [main, setmain] = useState(false);
  const [flight, setflight] = useState(false);
  const [counter, setcounter] = useState(false);
  const [back, setBack] = useState(false);

  const tomain = () => {
    main ? setmain(false) : setmain(true);
    flight ? setflight(false) : setflight(false);
    counter ? setcounter(false) : setcounter(false);
    back ? setBack(false) : setBack(false);
  };
  const toflight = () => {
    flight ? setflight(false) : setflight(true);
    counter ? setcounter(false) : setcounter(false);
    main ? setmain(false) : setmain(true);
    back ? setBack(false) : setBack(true);
  };
  const tocounter = () => {
    flight ? setflight(false) : setflight(false);
    counter ? setcounter(false) : setcounter(true);
    main ? setmain(false) : setmain(true);
    back ? setBack(false) : setBack(true);
  };

  return (
    <View style={styles.heads}>
      <View style={styles.head}>
        <Button title="F-LIGHT" disabled={main} onPress={toflight} />
        <Button title="COUNTER" disabled={main} onPress={tocounter} />
      </View>
      <View style={styles.body}>
        {flight && <Flight />}

        {counter && <Counter />}
      </View>
      <View style={styles.btn}>
        {back && <Button title="BACK" onPress={tomain} />}
      </View>
    </View>
  );
};

const Flight = () => {
  const [image, setimage] = useState(false);
  const [text, setText] = useState("ON");

  const toImage = () => {
    image ? setimage(false) : setimage(true);
    if (text === 'ON') {
      setText('OFF');
    } else {
      setText('ON');
    }
  };

  return (
    <View>
      {image &&  <Image
            source={require("./src/off.png")}
            style={{ width: 150, height: 150, resizeMode: "stretch" , marginVertical: 20}}
          />
          }
        {!image &&  <Image
            source={require("./src/on.png")}
            style={{ width: 150, height: 150, resizeMode: "stretch" ,  marginVertical: 20}}
          />
          }
     <Button title= {text} onPress={toImage} />
    </View>
  );
};
const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.main}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.btnmain}>
        <Button
          title="-1"
          onPress={() => {
            setNumber(number - 1);
          }}
        />
        <Button
          title="+1"
          onPress={() => {
            setNumber(number + 1);
          }}
        />
      </View>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    paddingVertical: 20,
  },
  heads: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 100,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  btnmain: {
    flexDirection: "row",
    gap: 20,
  },
  btn: {
    width: 100,
    paddingVertical: 20
  },
});
