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
              <Form.Control as="textarea"  id="newTask" ref={(input)=> this.task = input} type="text" classNameName="form-control"  />
              <br/>
              <Button type="submit" classNameName='btn-submit'>submit</Button>
              </Form>
               <div classNameName='card'>
               <div className="card-header">Your Review: </div>
               <div classNameName='card-body'>
                <div id="taskList" classNameName="list-unstyled">
                { this.props.tasks.map((task,key) => {
               return( 
                 <div classNameName="taskTemplate"  key = {key} >
                   <div classNameName="content">{task.content} </div>
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