import React, { useContext } from 'react';
import { UserContext } from '../App';
import './Message.css';

export default function Message({ messages }) {
  let user = useContext(UserContext);

  console.log(user, '&&&&&&');

  return (
    <div>
      {user ? (
        <ul className="test">
          {messages.map((message) => {
            return (
              <li
                className={
                  user === message.name ? 'userMessages' : 'otherMessages'
                }
              >
                `${message.name}: ${message.message}`
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
