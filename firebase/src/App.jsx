import { useEffect } from 'react'
import { messaging } from './firebase'
import { getToken } from 'firebase/messaging'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BPBGL0d5puuMOvfXBrw5tlLfhZlnPcCazPO9xZNF454vLgXy5fm_g55-PHurpxHd9Qx5X0ptIFUYJA0nJf9hfHk",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    
  }
}


useEffect(()=>{
  requestPermission()
},[]);




  return (
    <>
      
       <button>hello</button>
        
        
    </>
  )

}
export default App
