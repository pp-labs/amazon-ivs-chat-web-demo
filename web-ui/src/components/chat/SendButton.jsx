import React from 'react';
import PropTypes from 'prop-types';

const SendButton = ({ handleSendMessage }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSendMessage();
  };
  return (
    <>
      <button
        className={`input-line-btn send-message-btn`}
        onClick={handleButtonClick}
      >
        <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
          <path d='M20 12L4 4L6 12M20 12L4 20L6 12M20 12H6' />
        </svg>
      </button>
    </>
  );
};

SendButton.props = {
    handleSendMessage: PropTypes.func,
};

export default SendButton;