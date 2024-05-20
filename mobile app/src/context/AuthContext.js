import React, { createContext, useState } from 'react'

import { Base_URL } from "@env"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const register = (email, nickname, password) => {
    setIsLoading(true);
    axios.post(`${Base_URL}/mobil/user/create`, {
      email, nickname, password
    }).then(res => {
      let userInfo = res.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
      console.log(userInfo);


    }).catch(e => {
      console.log(`register error ${e}`);
      setIsLoading(false)
    })
  };

  
  const login = (password,username) =>{
    setIsLoading(true);
    axios.post(`${Base_URL}/mobil/user/login`,{
      password,username
    }).then(res=>{
      let userInfo=res.data;
      console.log(userInfo);
      setUserInfo(userInfo)
      AsyncStorage.setItem('userInfo',JSON.stringify(userInfo))
      setIsLoading(false)

    }).catch(e=>{
      console.log(`login error ${e}`);
      setIsLoading(false)
    })
  };

  const logout = () => {
    setIsLoading(true);
    console.log(userInfo.token)

    axios.get(
      `${Base_URL}/mobil/user/logout`,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
        params: { user_id: userInfo.user.Id }
      },
    ).then(res => {
      console.log(res.data);

      AsyncStorage.removeItem('userInfo');
      setUserInfo({});
      setIsLoading(false);
    }).catch(e => {
      console.log(`logout error ${e}`);
      setIsLoading(false);
    });
  };



  return (

    <AuthContext.Provider value={{
      register,
      isLoading,
      userInfo,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}


