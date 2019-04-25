import React, { Component } from 'react';
import '../css/PostList.css';
import { Form ,Button,ListGroup} from 'react-bootstrap';


class PostList extends Component {

  render() {
    return (
      <div className="container">
        <Form onSubmit={(event) => {
          event.preventDefault()
          this.props.createTask(this.task.value)
        }}>
          <h6>input: <Form.Control  id="newTask" ref={(input) => this.task = input}  type="text" className="form-control" /></h6>
          <br />
          <h6>Comment:<Form.Control  as="textarea" id="newTask2" ref={(input) => this.task = input} type="text" className="form-control" /> </h6>
          <br />
          <Button
                type="submit"  variant="success">
                Post
             </Button>
          
        </Form>
        <div className='card'>
          <div className='card-body'>
            <span id="taskList" className="list-unstyled" >
              {this.props.tasks.map((task, key) => {
                return (
                  <span className="taskTemplate" key={key}  >
                    <ListGroup>-> {task.content}
                    </ListGroup>
                    
                   

                  </span>
                
                )
              }
              
              )
            }
            </span>

            
          </div>
          
        </div>
        <div id="completedTaskList" className="list-unstyled">
        </div>
      </div>
    );
  }
}

export default PostList;