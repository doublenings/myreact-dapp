import React, { Component } from 'react';
import '../css/PostList.css';
import { Form } from 'react-bootstrap';

class PostList extends Component {
  
  
  render() {
    return (
      <div className="container">
        <Form onSubmit={(event) => {
          event.preventDefault()
          this.props.createTask(this.task.value)
        }}>
          <Form.Control as="textarea" id="newTask" ref={(input) => this.task = input} type="text" className="form-control" />
          <br />
          <button type="submit" className='btn-submit' >submit</button>
        </Form>
        <div className='card'>
          <div className='card-body'>
            <div id="taskList" className="list-unstyled" >
              {this.props.tasks.map((task, key) => {
                return (
                  <div className="taskTemplate" key={key}  >
                    <div className="content">{task.content}</div>
                   
                  </div>
                )
              }
              
              )
            }
            </div>
          </div>
        </div>
        <div id="completedTaskList" className="list-unstyled">
        </div>
      </div>
    );
  }
}

export default PostList;