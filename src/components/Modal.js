import React from 'react';

import './Modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      isClosing: false
    };

    this.handleOnOff = this.handleOnOff.bind(this);
  }

  handleOnOff() {
    const delay = this.state.openModal ? 400 : 0;

    if (this.state.openModal) {
      this.setState({ isClosing: true });
    }

    setTimeout(() => {
      this.setState({
        openModal: !this.state.openModal,
        isClosing: false
      });
    }, delay);
  }

  render() {
    const { openModal, isClosing } = this.state;

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
          <div className={`Modal__overlay${isClosing ? ' closing' : ''}`}>
            <div className={`Modal__container${isClosing ? ' closing' : ''}`}>
              <h2 className="Modal__header">Modal Header</h2>
              <p className="Modal__body">Modal Body</p>
              <button
                className="Modal__close-button"
                onClick={this.handleOnOff}
              >
                OK
            </button>
            </div>
          </div>
          :
          null
        }
      </div>
    );
  }
}

export default Modal;
