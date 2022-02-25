import {Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
container: {
backgroundColor:"grey",
borderRadius:10,
margin:5,
padding:1,

},
image:{
height: Dimensions.get("window").height/3, borderTopLeftRadius: 10,
width: Dimensions.get("window").width/2, borderTopLeftRadius: 10,
 borderTopRightRadius: 10, 
 resizeMode:"stretch",


},
title:{
fontWeight:'bold',
fontSize: 12,
},
stokDurum:{
    fontStyle:'italic', 
 fontWeight:'bold',
 textAlign:'left',
marginTop:3,

},
price:{
 fontStyle:'italic', 
 fontWeight:'bold',
 textAlign:'left', // sağa gönderdik
},
inner_container :{
    padding:3,
}
})