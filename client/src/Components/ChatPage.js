import React, { useState } from 'react';
import Message from './Message';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [messagesArr, setMessagesArr] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(message, '^^^^');
    let string = message;
    // arr.push(message);
    // console.log(arr);
    setMessagesArr([...messagesArr, string]);
    console.log(messagesArr);
  };
  return (
    <div>
      <h1>ChatPage</h1>
      <Message messages={messagesArr} />
      <form>
        <textarea onChange={handleChange} />
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}
