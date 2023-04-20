import React from 'react'

// import { MessengerChat } from "react-messenger-chat-plugin"
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Chat = () => {


  return (
    <div>
     <MessengerCustomerChat
      pageId="101010511967331"
      appId="3000713826817424"
     ></MessengerCustomerChat>
    </div>
  )
}

export default Chat