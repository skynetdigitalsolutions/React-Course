import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

type ChatMessageProps = {
    chatMessages:{
        message:string,
        sender:string,
        id:string,
    }[]
}

function ChatMessages({ chatMessages } : ChatMessageProps) {
    const chatMessagesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const containerElem = chatMessagesRef.current
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight
        }
    }, [chatMessages])
    //const [chatMessages, setChatMessages] = array //Array destructuring (Shortcut)    
    /* const chatMessages = array[0];
     const setChatMessages = array[1]; */

    return (
        <div className='chat-messages-container' ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                )
            })}
        </div>
    )

}

export default ChatMessages;
