import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Spacer =({children})=>{
    return(
        <View>
            <Text style={styles.Spacer}>{children}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    Spacer:{
        margin:20
    }
});

export default Spacer;