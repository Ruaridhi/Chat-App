This is a Chat App built with React, Node and Socket.io

To run:
In one terminal run the front-end:
```
cd client
npm install
npm start
```

In a second terminal:
```
cd server
npm install
npm run dev
```


To test it's working:
- open two different tabs
- login as the user by typing your name in the login box
- login as another user in the second tab by typing another name in the other login box
- start sending messages across the 2 different tabs


If I had more time:
- I started with the login box before seeing the requirement for being able to update with /nick. I'd refactor so that the name gets set up by the message starting with `/nick`
