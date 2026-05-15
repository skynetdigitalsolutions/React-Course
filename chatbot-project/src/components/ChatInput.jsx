import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'


export function ChatInput({ chatMessages, setChatMessages }) {

    const [inputText, setInputText] = useState('');

    function saveInput(event) {
        setInputText(event.target.value)
    }

    function sendMessage() {
        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]

        setChatMessages(newChatMessages)

        const response = Chatbot.getResponse(inputText)
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'atlas',
                id: crypto.randomUUID()
            }
        ])
        setInputText('')
    }

    return (
        <div className='chat-input-section'>
            <input placeholder='What is that burning thought...' size='35'
                onChange={saveInput}
                value={inputText}
                className='chat-input'
            />
            <button
                onClick={sendMessage}
                className='send-button'
            >Send</button>
        </div>
    )
}