import React, { useState } from 'react';
import Message from './Message';
import './ChatPage.css';

export default function ChatPage({ user }) {
  const [message, setMessage] = useState('');
  const [messagesArr, setMessagesArr] = useState([
    { name: 'Bob', message: 'Hi' },
  ]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let string = message;
    setMessagesArr([...messagesArr, { name: user, message: message }]);
    console.log(messagesArr);
  };
  return (
    <div className="chatPage">
      <h1>ChatPage</h1>
      <Message messages={messagesArr} />
      <form>
        <textarea onChange={handleChange} />
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}
