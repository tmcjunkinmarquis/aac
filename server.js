const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({dev})
const nextHandler = nextApp.getRequestHandler()

let port = 3000

io.on('connect', socket=>{
  //start emitting events to the socket/client
  socket.emit('now', {
    message: 'zeit'
  })
  socket.on('subscribeToTimer', (interval) => {
    // console.log('socket is subscribing to timer with interval ', interval);
    // setInterval(() => {
    //   socket.emit('timer', new Date());
    // }, interval);
  });
})

nextApp.prepare()
  .then(() => {
    

    app.get('*', (req, res) => {
      return nextHandler(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })




//  PREVIOUSLY:
// const express = require('express')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const nextApp = next({ dev })
// const nextHandle = nextApp.getRequestHandler()

// // io.on('connection', socket => {
// //   socket.on('message', (data) => {
// //     messages.push(data)
// //     socket.broadcast.emit('message', data)
// //   })
// // })
// let server;
// nextApp.prepare()
//   .then(() => {
//     const server = express()

//     server.get('*', (req, res) => {
//       return nextHandle(req, res)
//     })

//     server.listen(3000, (err) => {
//       if (err) throw err
//       console.log('> Ready on http://localhost:3000')
//     })
//   })
//   .catch((ex) => {
//     console.error(ex.stack)
//     process.exit(1)
//   })

//   const io = require('socket.io')(server);

