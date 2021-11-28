import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Text, TextInput, View, Image } from 'react-native';
import styles from './styles';

export default function App() {
  const [txt, setTxt] = useState("text here")
  const [index,setIndex]=useState(0);
  const imgSrcArr = ["https://images.unsplash.com/photo-1633113090286-3318ea2d24ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1637952167279-5a72aa5dbf02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    "https://images.unsplash.com/photo-1637883705440-217a7790028a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
    "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=961&q=80",
    "https://images.unsplash.com/photo-1637921880112-2244b5ddc61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1637921884274-e12c48d7cd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1637883706252-aff4859912a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"];
const next=()=>{
  if(index===imgSrcArr.length-1){
    setIndex(imgSrcArr.length-1);
  }else{
    setIndex(index+1);
  }
}
const pre=()=>{
  if(index===0){
    setIndex(0);
  }else{
    setIndex(index-1);
  }
}
    return (
    <View>
      <Text style={styles.header}>header</Text>
      <View style={styles.child}>
        <TextInput placeholder="Please Enter Your Name" style={styles.input} value={txt}></TextInput>
        <View style={styles.btn}>
          <Button title="Change Text" color="black" onPress={() => {
            setTxt("Alla")
          }}></Button>
        </View>
      </View>
      <View style={styles.img}>
        <Image style={{ width:500, height: 400 }}
          source={imgSrcArr[index]} width="200" height="300"></Image>
      </View>
      <View style={styles.action}>
        <Button title="Privous" onPress={()=>pre()}></Button>
        <View> <Button title="Next" style={styles.btns} onPress={()=>next()}></Button></View>
      </View>
    </View>
  );
}
