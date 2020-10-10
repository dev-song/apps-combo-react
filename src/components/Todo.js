import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
  }

  render() {
    const { todo } = this.state;

    return (
      <div className='Todo'>
        {todo.length < 5
          ?
          <form className='add-todo__container'>
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
