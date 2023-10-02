import React from "react";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
  constructor(){
    super();
    this.state={
      inputData:"",
      todoItems:[]
    }
  }
  changeTodoInput = (event) =>{
    this.setState({inputData:event.target.value})
  }

  addTodo = (event) =>{
    if(this.state.inputData!==''){
      let newTodoItems=[...this.state.todoItems,this.state.inputData];//It uses the spread (...) operator to create a
                                                                       // shallow copy of the current todoItems array
                                                                       // stored in the component's state and appends the current
                                                                       // value of inputData to it.
                                                                       this.setState({todoItems:newTodoItems, inputData:""})
    }
  }

  deleteTodo =(index) =>{
    let todoItems=[...this.state.todoItems];
    let newTodoItems=todoItems.filter((value, key)=>{
       return index!==key
    })
    this.setState({todoItems:newTodoItems})
  }
  render(){
  return (
   <div className="container d-flex justify-content-center bg-light" style={{ minHeight: '50vh',top:'100vh' }} >
     <div className="row align-items-center ">
       <div className="col">
         <h3 className="text-center ">React Todo App</h3>
            <div className="input-group">
                <input type="text"
                 placeholder="Enter Something"
                 className="form-control"
                  onChange={this.changeTodoInput}
                  value={this.state.inputData}/>
                <div className="input-group-append">
                <span className="btn btn-success " onClick={this.addTodo}>Add</span>
                </div>
            </div>
                 <TodoList items={this.state.todoItems} deleteTodo={this.deleteTodo}/>
       </div>
     </div>
   </div>

  );
  }
}

export default TodoApp;
