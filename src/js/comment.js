import React, { Component } from 'react'
import PostList from './PostList';
import { Post_List_ABI , Post_List_ADDRESS } from '../contractsJson/config'
import web3 from '../web3';
// import PostListContracts from '../json/'
import '../css/PostList.css'
import $ from "jquery";


class comment extends Component {
    constructor(props){
        super(props)
        this.state ={ 
          account: '',
          taskCount: 0,
          tasks: [],
          loading : true
        }
        this.createTask = this.createTask.bind(this)
    
  }

  componentWillMount(){
    this.loadBlockchainData()
  }
 

  async loadBlockchainData(){
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    console.log("accounts",accounts[0])
    console.log("network:",network)
    // const contract = require('truffle-contract')
    // const PostList = contract(PostListContracts)
    const PostList = new web3.eth.Contract(Post_List_ABI,  Post_List_ADDRESS )
    this.setState({ PostList })
      const taskCount = await PostList.methods.taskCount().call()
      this.setState({ taskCount }) 
      for (var i = 1; i <= taskCount; i++) {
        const task = await PostList.methods.tasks(i).call()
        this.setState({
          tasks: [...this.state.tasks, task]
        })
      }
      
     console.log("tasks:" , this.state.tasks)
     this.setState({ loading: false })
  }
  createTask = async()=>{
    const content = $('#newTask').val()
    const text = $('#newTask2').val()
    this.setState({ loading: true })
    this.state.PostList.methods.createTask(content).send({ from: this.state.account })
    this.state.PostList.methods.createTask(text).send({ from: this.state.account })
    // this.state.PostList.methods.createTask(comment).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }
  render() {
    return (
      <div className="card">
      <div className="card-header">ABSTRACTS</div>
        
          { this.state.loading 
          ?<div id="loader" className="text-center">
            <p className="text-center">Loading...</p>
          </div>  
          : <PostList 
             tasks = {this.state.tasks} 
             createTask={this.createTask} 
             
             />  }
        </div>
      

    )
  }
}
 export default comment