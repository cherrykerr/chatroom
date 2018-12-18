// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


const app = require ('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = [];
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
io.on('connection', (socket)=>{
    sockets.push(socket);
    console.log('用户已连接');
    socket.on('chat message', (msg)=>{
        sockets.forEach(eachSocket=>{
            eachSocket.emit('send message',msg);
        });
        console.log('message: ' + msg);
    });
    socket.on('disconnect',()=>{
        console.log('用户已退出')
    });
});
http.listen(3000,()=>{console.log('listen on *：3000')});
  



