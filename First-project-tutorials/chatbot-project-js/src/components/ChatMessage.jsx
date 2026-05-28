import AtlasProfileLogo from '../assets/chatbot.jpg'
import UserProfileImage from '../assets/user3.jpg'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
    //const {message,sender} = props;

    /* if (sender === 'atlas') {
         return (
             <div>
                 <img src='lynx-8443540.jpg' width='45' />
                 {message}
   
             </div>
         )
     } */

    return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-atlas'}>
            {sender === 'atlas' && <img src={AtlasProfileLogo} className='chat-profile-picture' />}
            <div className='message-content'>
                {message}
            </div>
            {sender === 'user' && <img src={UserProfileImage} className='chat-profile-picture' />}
        </div>
    )
}

