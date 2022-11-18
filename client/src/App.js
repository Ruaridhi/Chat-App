import logo from './logo.svg';
import './App.css';
import ChatPage from './Components/ChatPage';
import socketClient from 'socket.io-client';

const SERVER = socketClient.connect('http://localhost:4000');

function App() {
  var socket = socketClient(SERVER);

  socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
  });

  return (
    <div className="App">
      <ChatPage />
    </div>
  );
}

export default App;
