import React from 'react';
import {View, Text, Image} from 'react-native'
import styles from './Card_Style';


const Card = ({patiCardlar})=> {
        return(
            <View style={styles.container}>
                
                <Image style={styles.image} source={{uri: patiCardlar.imgURL}} />
                <View style={styles.inner_container}></View>
                <Text style={styles.title}>{patiCardlar.title}</Text>
                
                <Text style={styles.price}>{patiCardlar.price}</Text>
                <Text style={styles.stokDurum}>{patiCardlar.inStock ? <Text></Text> : <Text style={{color:'red', fontWeight:'bold'}}>Stokta Yok</Text>}</Text>
    
    
             </View>
        );
};


export default Card;