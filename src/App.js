import React, {useState} from 'react'
import Navbar from './Navbar'
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      
      {show && <Navbar />}
    </>
  )
}

export default App
