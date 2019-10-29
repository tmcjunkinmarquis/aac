import fetch from 'isomorphic-fetch'
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3000');

export function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
}

export function getPost(slug) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`)
}

export function subscribeToTimer(interval, cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', interval);
}
