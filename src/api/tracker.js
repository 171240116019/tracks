import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance= axios.create({
    baseURL:'https://7d4b-103-50-153-22.ngrok.io'
});

instance.interceptors.request.use(
   async config=>{
       console.log(config,'config');
       const token=await AsyncStorage.getItem('token');
       if(token){
           config.headers.Authorization=`Bearer ${token}`;
       }
     config.headers['Content-Type'] = 'application/json';
     config.headers.post['Content-Type'] = 'application/json';

       console.log(config,'config');
       return config;
   },
    err=>{
        console.log(err)
        return Promise.reject(err);
    }
);

export default instance;