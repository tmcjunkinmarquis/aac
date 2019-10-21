import React, { useState, useEffect } from 'react';
import PageLayout from '../layouts/PageLayout'
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Container, Button } from 'reactstrap';

const MessageUs = props => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return(
    <PageLayout>
      <div>
        <br/>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Send Us A Message</h1>
            <br/>
            <input className="form-control" placeholder="Name"></input>
            <br/>
            <Button 
              color="success" 
              size="large" 
              onClick={() => setCount(count + 1)}>success</Button>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
        <div id="messages"></div>
      </div>
      
    </PageLayout>
  )
    
  
}

export default MessageUs;