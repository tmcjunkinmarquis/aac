import React, { useState, useEffect } from 'react';
import { subscribeToTimer } from '../api/posts';
import logo from '../public/logo.jpeg'
const io = require('socket.io-client');
const socket = io('http://localhost:3000');
import PageLayout from '../layouts/PageLayout'
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'; 

const MessageUs = props => {

  const [messageCount, setMessageCount] = useState(0);
  const [id, setId] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [theme, setTheme] = useState('dark');
  const [inRoom, setInRoom] = useState(false);
  const [messages, setMessages] = useState([{title:'message1'}, {title:'message2'}])
  

  const addMessages = (message)=>{
    console.log(message)
  }
  

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameInput) {
      return alert("Name can't be empty");
    }
    setId(nameInput);
    socket.emit("join", nameInput, inRoom);
  };

  

  useEffect(() => {
    if (inRoom) {
      console.log('joining room');
      socket.emit('room', { room: 'test-room' });
    }

    return () => {
      if (inRoom) {
        console.log('leaving room');
        socket.emit('leave room', {
          room: 'test-room'
        })
      }
    }
  });

  useEffect(() => {
    socket.on('receive message', payload => {
      setMessageCount(messageCount + 1);
    });

    document.title = `${messageCount} new messages have been emitted`;
  }, [messageCount]); //only re-run the effect if new message comes in

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${messageCount} times`;
    // make a socket connection
    console.log(`You clicked ${messageCount} times`)
    addMessages('howdy')

    subscribeToTimer(3000, ()=>{
      console.log('its a party!')
    })
    
    // return ()=>{
      // close the socket connection
    // }
    
  }, [messageCount]);

  const handleSetTheme = () => {
    let newTheme;
    (theme === 'light')
      ? newTheme = 'dark'
      : newTheme = 'light';
    console.log('new theme: ' + newTheme);
    setTheme(newTheme);
  }

  const handleInRoom = () => {
    inRoom
      ? setInRoom(false)
      : setInRoom(true);
  }

  const handleNewMessage = () => {
    console.log('emitting new message');
    socket.emit('new message', {
      room: 'test-room'
    });
    setMessageCount(messageCount + 1);
  }

  return id !== '' ? (
    <PageLayout>
      <div>Hello</div>
    </PageLayout>
    
  ) : (
    <PageLayout>
        <div className={`App Theme-${theme}`}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <h1>
              {inRoom && `You Have Entered The Room`}
              {!inRoom && `Outside Room`}
            </h1>

            <p>{messageCount} messages have been emitted</p>

            {inRoom &&
              <button onClick={() => handleNewMessage()}>
                Emit new message
        </button>
            }

            <button onClick={() => handleSetTheme()}>
              Toggle Theme
        </button>

            <button onClick={() => handleInRoom()}>
              {inRoom && `Leave Room`}
              {!inRoom && `Enter Room`}
            </button>

          </header>
      </div>
      <br />
      <div>
        <br/>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-5">Send Us A Message</h1>
            <br/>
              <Form onSubmit={event => {handleSubmit}}>
              <FormGroup>
                  <Label for="exampleName"></Label>
                <Input
                  id="name" 
                  required  
                  onChange={e => setNameInput(e.target.value.trim())} 
                  placeholder="What is your name..."></Input>
                  <br />
                  <Input
                    id="room"
                    onChange={e => setInRoom(e.target.value.trim())}
                    placeholder="What is your room .."
                  />
                  <br />
              </FormGroup>
              <Button
                type="submit"
                color="success"
                size="large"
                onClick={() => setMessageCount(messageCount + 1)}>Submit
              </Button>
            </Form>
            <br/>
            
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
        <div id="messages">
            <ul>
              {messages.map(message => (
                <li key={message.id}>{message.title}</li>
              ))}
            </ul>
        </div>
      </div>

      
    </PageLayout>
  )
    
  
}

export default MessageUs;