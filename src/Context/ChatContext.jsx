import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth, db , provider} from '../utils/firebase'


export const ChatContext = createContext()


const ChatProvider = ({children}) => {

  const [user, setUser] = useState(false)
  
  useEffect(() => {
    console.log("onAuthStateChanged called");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user updated:", user);
      setUser(user);
    });
    return unsubscribe;
  }, []);

  if(user === false) return <p>Loading App...</p>
  

  return(
    <ChatContext.Provider value={{user, setUser}}>
        {children}
    </ChatContext.Provider>
)
};

export default ChatProvider
export const useChatContext  = () => useContext(ChatContext)