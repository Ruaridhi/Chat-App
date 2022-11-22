import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import './Message.css';

export default function Message({ messages }) {
  let user = useContext(UserContext);

  return (
    <div>
      {user ? (
        <ul className="allMessages">
          {messages ? (
            messages.map((message) => {
              return (
                <li
                  className={
                    user === message.name ? 'userMessages' : 'otherMessages'
                  }
                >
                  `${message.name}: ${message.message}`
                </li>
              );
            })
          ) : (
            <h1>No messages yet</h1>
          )}
        </ul>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}
