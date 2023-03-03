import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useChatContext } from '../Context/ChatContext'
import { auth, logOut, provider } from '../utils/firebase'

const NavBar = () => {

  const {user} = useChatContext()

  const loginGoogle = async()=>{
    try {
      const {user} = await signInWithPopup(auth, provider)
        console.log('usuario navbar', user)
    } catch (error) {  
      console.log(user)
    }
}

const handleLogOut= async ()=>{
  try {
      await logOut()
      
  } catch (error) {
      console.log(error)
  }
}


  return (
    <div className='p-4 h-16 flex justify-between text-white font-semibold text-lg bg-slate-900'>        
        <header className='flex gap-4  items-end' >
            <h1 className='uppercase text-3xl font-bold'>ChatLive</h1>

        </header>
            <nav className='flex gap-4 justify-between text-white'>
              {
                user? (
                  
                  <button onClick={handleLogOut} className='bg-rose-500 hover:bg-rose-400 text-white font-bold  px-4 border-b-4 border-rose-700 hover:border-b-2  rounded-md'>Cerrar sesion</button>
                  ):(
                    
                    <button onClick={loginGoogle} className='bg-sky-600 hover:bg-sky-400 text-white font-bold  px-4 border-b-4 border-sky-700 hover:border-b-2 rounded-md'>Acceder</button>
                )
              }
            </nav>
    </div>
  )
}

export default NavBar