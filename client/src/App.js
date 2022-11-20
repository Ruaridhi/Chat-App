import logo from './logo.svg';
import './App.css';
import ChatPage from './Components/ChatPage';
import socketClient from 'socket.io-client';
import { useState, createContext } from 'react';
import Login from './Components/Login';

const SERVER = socketClient.connect('http://localhost:4000');
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState('');

  var socket = socketClient(SERVER);

  socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
  });

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <ChatPage />
        {!user ? <Login user={setUser} /> : null}
      </div>
    </UserContext.Provider>
  );
}

export default App;
