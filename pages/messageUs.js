import PageLayout from '../layouts/PageLayout'
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Container, Button } from 'reactstrap';

const MessageUs = props => {
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
            <Button color="success" size="large">success</Button>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
      </div>
      
    </PageLayout>
  )
    
  
}

export default MessageUs;