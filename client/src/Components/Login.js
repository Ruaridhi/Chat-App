import React, { useState } from 'react';

export default function Login({ user }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    user(name);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}
