import React, { useState } from 'react';

export default function Login({ user, channel }) {
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

      <form>
        <input type="text" onChange={handleChange} />
        <ul></ul>
        <br />
        <button onClick={handleSubmit}>Login In</button>
      </form>
    </div>
  );
}
