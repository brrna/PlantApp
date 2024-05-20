import React, { createContext } from 'react'

import {Base_URL} from "@env"


export const AuthContext = createContext()


export const AuthProvider = ( {children}) => {
  return (

    <AuthContext.Provider value={"Text VAluse"}>
        {children}
    </AuthContext.Provider>
  )
}


