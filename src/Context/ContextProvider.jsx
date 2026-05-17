import NetflixCouple from "./Context.";
import React, { useState } from 'react'



const ContextProvider = ({children}) => {

const [enabledFAQ , setEnabledFAQ] = useState(null)
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [moreInfoEnabled , setMoreInfoEnabled] =  useState(true)


  const [userName , setUserName] = useState("");


  return (
    
    <NetflixCouple.Provider value={{
        enabledFAQ,
        setEnabledFAQ,
        email,
        setEmail,
        pass,
        setPass,
        userName,
        setUserName,
        moreInfoEnabled,
        setMoreInfoEnabled,


    }}>
        {children}
    </NetflixCouple.Provider>
  )
};

export default ContextProvider