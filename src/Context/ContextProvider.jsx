import NetflixCouple from "./Context.";
import React, { useState } from 'react'



const ContextProvider = ({children}) => {

const [enabledFAQ , setEnabledFAQ] = useState(null)



  return (
    
    <NetflixCouple.Provider value={{
        enabledFAQ,
        setEnabledFAQ
    }}>
        {children}
    </NetflixCouple.Provider>
  )
};

export default ContextProvider