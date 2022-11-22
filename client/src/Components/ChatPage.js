import React, { useState } from 'react';
import Message from './Message';
import './ChatPage.css';

export default function ChatPage({ user, socket, messages }) {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //let string = message;
    socket.emit('send-message', {
      name: user,
      message: message,
      id: Date.now(),
    });
    //setMessagesArr([...messagesArr, { name: user, message: message }]);
    console.log('emitting');
  };
  return (
    <div className="chatPage">
      <h1>ChatPage</h1>
      <Message messages={messages} />
      <form>
        <textarea className="textBox" onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}
