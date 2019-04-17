import React, { Component } from 'react';
import '../css/PostList.css';
import { Button, Container, Form } from 'react-bootstrap';

class PostList extends Component {
    render() {
        return (
            <Container>
              <Form onSubmit={(event) => {
             event.preventDefault()
             this.props.createTask(this.task.value)
              }}>
              <Form.Control as="textarea"  id="newTask" ref={(input)=> this.task = input} type="text" className="form-control"  />
              <br/>
              <Button type="submit" className='btn-submit'>submit</Button>
              </Form>
               <div className='card'>
               <div className="card-header">Your Review: </div>
               <div className='card-body'>
                <div id="taskList" className="list-unstyled">
                { this.props.tasks.map((task,key) => {
               return( 
                 <div className="taskTemplate"  key = {key} >
                   <div className="content">{task.content} </div>
                  </div>
               )
             })}
            </div>
            </div>
            </div>
            <div id="completedTaskList" classNameName="list-unstyled">
            </div>
        </Container>
        );
    }
}

export default PostList;