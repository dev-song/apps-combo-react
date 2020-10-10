import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
  }

  addTodo(e) {
    e.preventDefault();

    this.setState({
      todo: [
        ...this.state.todo,
        new TodoItem(e.target.querySelector('input[type="text"]').value)
      ]
    });
  }

  render() {
    const { todo } = this.state;

    return (
      <div className='Todo'>
        <ul className='Todo-list'>
          {todo.map(({ regTime, text }) => (
            <li key={regTime} className='Todo-item'>
              {text}
            </li>
          ))}
        </ul>

        {todo.length < 5
          ?
          <form
            className='add-todo__container'
            onSubmit={e => this.addTodo(e)}
          >
            <input
              type='text'
              className='add-todo__input'
              placeholder='What needs to be done?' />
            <button className='add-todo__button'>+</button>
          </form>
          :
          <p className='message-full-list'>The list is full.</p>
        }
      </div>
    );
  }
}

class TodoItem {
  constructor(text) {
    this.regTime = new Date().getTime();
    this.text = text
  }
}

export default Todo;
