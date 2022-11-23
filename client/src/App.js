import logo from './logo.svg';
import './App.css';
import ChatPage from './Components/ChatPage';
import socketClient from 'socket.io-client';
import { useState, createContext, useEffect } from 'react';
import Login from './Components/Login';

const SERVER = 'http://localhost:4000';
export const UserContext = createContext();

function App() {
  const socket = socketClient(SERVER);
  const [socketMessages, setSocketMessages] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    socket.on('connection', () => {
      console.log(`I'm connected with the back-end`);
    });
    socket.on('disconnect', () => {
      console.log('I am disconnected');
    });
    socket.on('message', (messageObject) => {
      console.log(messageObject, '&&&&&&');
      setSocketMessages((current) => [...current, messageObject]);
    });

    return () => {
      socket.off('connection');
      socket.off('disconnect');
      socket.off('message');
    };
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        {!user ? (
          <Login user={setUser} />
        ) : (
          <ChatPage user={user} socket={socket} messages={socketMessages} />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
