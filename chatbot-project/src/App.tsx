import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import Favicon from './assets/chatbot.jpg'
import './App.css'


function App() {

  const [chatMessages, setChatMessages] = useState([{
    message: 'hi',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'I takedown relativity equations like bread and butter',
    sender: 'atlas',
    id: 'id2'
  }, {
    message: 'So what is the distance between the moon and earth',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'I estimate around 100,000 km apart',
    sender: 'atlas',
    id: 'id4'
  }])

  const title = `${chatMessages.length} Messages`


  return (

    <>
      <title>{title}</title>
      <link rel="icon"  type="image/jpeg"  href={Favicon}  />


      <div className='App-content'>
        <h1>Atlas Technologies</h1>
        <ChatMessages
          chatMessages={chatMessages}
        />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  )
}


export default App
