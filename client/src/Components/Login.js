import React, { useEffect, useState } from 'react';

export default function Login({ user, channel }) {
  const [name, setName] = useState('');
  const [channelData, setChannelData] = useState();

  useEffect(() => {
    loadChannels();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    user(name);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const loadChannels = async () => {
    const settings = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch('http://localhost:3000/', settings);

      let data = await response.json();
      console.log(data, '£££££');
      //this.setState({ channels: data.channels });
      setChannelData(data.channels.name);
    } catch (e) {
      return e;
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <ul>
          {/* {channelData.map((channel) => {
            <button type="submit">{channel}</button>;
          })} */}
        </ul>
      </form>
    </div>
  );
}
