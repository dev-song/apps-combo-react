import React from 'react';

import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }

  addTodo(e) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="text"]');
    if (!this.validate(input.value)) return;

    this.setState({
      todo: [
        ...this.state.todo,
        new TodoItem(input.value)
      ]
    });

    input.value = '';
    input.focus();
  }

  validate(value) {
    return value.length > 0 && value.length <= 32;
  }

  deleteTodo(regTime) {
    this.setState({
      todo: this.state.todo.filter(item => item.regTime !== +regTime)
    });
  }

  render() {
    const { todo } = this.state;

    return (
      <div className='Todo'>
        {todo.length < 1
          ? null
          :
          <ul className='Todo__item-list'>
            {todo.map(({ regTime, text }) => (
              <li key={regTime} className='Todo-item'>
                {text}
                <button
                  className='Todo-item__delete-button'
                  onClick={() => { this.deleteTodo(regTime) }}
                >
                  -
              </button>
              </li>
            ))}
          </ul>
        }

        {todo.length < 5
          ?
          <form
            className='Todo__input-container'
            onSubmit={e => this.addTodo(e)}
          >
            <input
              type='text'
              className='Todo__input'
              minLength='1'
              maxLength='32'
              placeholder='What needs to be done?' />
            <button className='Todo__input--add-button'>+</button>
          </form>
          :
          <p className='Todo__list-full-message'>The list is full.</p>
        }
      </div>
    );
  }
}

class TodoItem {
  constructor(text) {
    this.regTime = new Date().getTime();
    this.text = text;
  }
}

export default Todo;
