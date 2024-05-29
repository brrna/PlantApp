import React, { createContext, useEffect, useState } from 'react'

import { Base_URL } from "@env"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [splashLoading,setSplashLoading]=useState(false);
  const [userMessage,setUserMessage] = useState("")
  const [userMessageSignin,setUserMessageSignin] = useState("")

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
      setUserMessage("Registration successful please Sign in!!")

    }).catch(e => {
      console.log(`register error ${e}`);
      setIsLoading(false)
      setUserMessage("Something went wrong, please check again !!")
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
      setUserMessageSignin("Your password or email is incorrect please check!")
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


  const isLoggedIn= async()=>{
    try{
      setSplashLoading(true)
      let userInfo= await AsyncStorage.getItem('userInfo')
      userInfo=JSON.parse(userInfo);
      if(userInfo){
        setUserInfo(userInfo)
      }
      setSplashLoading(false)
    } catch(e){
      console.log(`is an loogged error ${e}`)

    }
  };

  useEffect(()=>{
    isLoggedIn();
  },[])


  return (

    <AuthContext.Provider value={{
      register,
      isLoading,
      userInfo,
      login,
      logout,
      isLoggedIn,
      splashLoading,
      userMessage,
      userMessageSignin
    }}>
      {children}
    </AuthContext.Provider>
  )
}


