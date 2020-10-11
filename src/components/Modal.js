import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };

    this.handleOnOff = this.handleOnOff.bind(this);
  }

  handleOnOff() {
    const delay = this.state.openModal ? 400 : 0;

    setTimeout(() => {
      this.setState({ openModal: !this.state.openModal });
    }, delay);
  }

  render() {
    const { openModal } = this.state;

    return (
      <div className="Modal">
        <button
          className='Modal__open-button'
          onClick={this.handleOnOff}
        >
          Show Modal
        </button>

        {openModal
          ?
          <div className="Modal__overlay">
            <h2 className="Modal__overlay--header">Modal Header</h2>
            <p className="Modal__overlay--body">Modal Body</p>
            <button
              className="Modal__overlay--close-button"
              onClick={this.handleOnOff}
            >
              OK
            </button>
          </div>
          :
          null}
      </div>
    );
  }
}

export default Modal;
