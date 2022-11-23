import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import './Message.css';

export default function Message({ messages }) {
  let user = useContext(UserContext);

  return (
    <div>
      {
        <ul id="messages" className="allMessages">
          {messages.map((message) => {
            let text = '';
            if (message.message.startsWith('/think')) {
              text = message.message.substring(7);
            } else {
              text = message.message;
            }

            return (
              <li
                id="messages"
                className={
                  user === message.name ? 'userMessages' : 'otherMessages'
                }
              >
                <p
                  style={
                    message.message.startsWith('/think')
                      ? { color: 'grey' }
                      : { color: 'black' }
                  }
                >{`${text}`}</p>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
