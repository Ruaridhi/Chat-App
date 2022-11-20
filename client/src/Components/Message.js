import React, { useContext } from 'react';
import { UserContext } from '../App';

export default function Message({ messages }) {
  let user = useContext(UserContext);

  console.log(user, '&&&&&&');

  return (
    <div>
      <ul>
        {messages.map((message) => {
          return `${user}: ${message}`;
        })}
      </ul>
    </div>
  );
}
