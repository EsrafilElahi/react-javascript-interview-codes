import React, { useEffect, useRef } from 'react'

const Messages = ({ messages }) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

  return (
    <div>
      {messages.map(message => <Message key={message.id} {...message} />)}
      <div ref={messagesEndRef} />
    </div>
  )
}
