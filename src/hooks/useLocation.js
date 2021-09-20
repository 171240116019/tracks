import { useState,useEffect } from "react";
import * as Location from 'expo-location';


export default(shouldTrack,callback)=>{
    const[err,setErr]=useState(null);
   
   
   
    
useEffect(()=>{
  let subscriber;
  
  const startWatching=async()=>{
    try{
      
      let { status } = await Location.requestPermissionsAsync();
     subscriber=  await Location.watchPositionAsync({
        accuracy:Location.Accuracy.BestForNavigation,
        timeInterval:1000,
        distanceInterval:10
},
callback

);

      
    }catch(e){
      
      setErr(e);

    }
  };

    if(shouldTrack){
        startWatching();
    }else{
      if(subscriber){
        subscriber.remove();
      }
        subscriber=null;


    }
    return()=>{
      if(subscriber){
        subscriber.remove(null);
      }
    }
   
  },[shouldTrack,callback]);

  return [err];

};