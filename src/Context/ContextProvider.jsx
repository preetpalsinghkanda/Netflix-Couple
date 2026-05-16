import NetflixCouple from "./Context.";
import React, { useState } from 'react'



const ContextProvider = ({children}) => {

const [enabledFAQ , setEnabledFAQ] = useState(null)
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");



  return (
    
    <NetflixCouple.Provider value={{
        enabledFAQ,
        setEnabledFAQ,
        email,
        setEmail,
        pass,
        setPass,
    }}>
        {children}
    </NetflixCouple.Provider>
  )
};

export default ContextProvider