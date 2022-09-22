import React, { Component } from 'react';
import shortid from 'shortid';
// import Counter from './Counter';
import './App.css';
// import Form from './Form';
// import Dropdown from './Dropdown';
// import ColorPicker from './ColorPicker';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor/TodoEditor';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
import IconButton from './IconButton/IconButton';
import {ReactComponent as AddIcon} from '../icons/icons8-color-switch.svg'
// import Clock from './Clock/Clock';
// import Tabs from './Tabs/Tabs';
// import tabs from './tabs.json';
// const colorPickerOptions = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4caf50' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#e91e63' },
//   { label: 'indigo', color: '#3f51b5' }
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'To learn base of React', completed: true },
      { id: 'id-2', text: 'React router', completed: false },
      { id: 'id-3', text: 'Redux', completed: false }
    ],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // console.log('App componentDidMount')

    const todos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(todos)
    if (parsedTodos) {
      this.setState({ todos: parsedTodos })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App ComponentDidUpdate');

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    if (nextTodos !== prevTodos) {
      // console.log('update field todos')

      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }

    if (
      nextTodos.length > prevTodos.length &&
      prevTodos.length !==0
    ) {
      this.toggleModal();
    }

  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }
    
  getVisibleTodos = () => {

    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter))
  }

  getCompletedTodos = () => {
      const {todos} = this.state

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  }
  
  addTodo = text => {

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({todos}) => ({
      todos: [todo, ...todos],
    }))

    // this.toggleModal();
  }

  deleteTodo = todoId => {
    this.setState(
      prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== todoId),
      }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('We find needed Todo!');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({todos}) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? {
            ...todo,
            completed: !todo.completed,
          }
          : todo,
      ),
    }));
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  


  // handleNameChange = event => {
  //   console.log(event)
  //   this.setState({ name: event.currentTarget.value });
  // }

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter , showModal} = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodos();
    const visibleTodos = this.getVisibleTodos()  

    return (
      <>
        <IconButton type="button" onClick={this.toggleModal} aria-label="Add Todo">
          <AddIcon width="40px" height="40px" fill="white"/>
        </IconButton>
        {/* <button type='button' onClick={this.toggleModal}>
          Open modal
        </button> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>)
        }
        {/* <Tabs items={tabs } /> */}
        {/* <Clock/> */}

        {/* <Form onSubmit={this.formSubmitHandler } /> */}
        
        {/* <h1>Стан компонента</h1> */}
          {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={ colorPickerOptions} /> */}
        <div>
          <p>Full amount : {totalTodoCount}</p>
          <p>Full amount of ready : {completedTodoCount}</p>
        </div>
        


        <Filter value={filter} onChange={this.changeFilter } />
        
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted } />
        
      </>
    );
  }
}

export default App;
