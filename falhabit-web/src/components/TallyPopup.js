import React, { useState, useEffect } from 'react';

const TallyPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const formId = '3NMyJb';

  useEffect(() => {
    // Check if the Tally script is loaded
    if (window.Tally) {
      window.Tally.openPopup(formId, {
        layout: 'modal', // Open as a centered modal
        width: 700, // Set the width of the modal
        autoClose: 5000, // Close the popup 5 seconds after form is submitted
        emoji: {
          text: '📝',
          animation: 'wave',
        },
        hiddenFields: {
          ref: 'downloads',
          email: 'alice@example.com',
        },
        onOpen: () => {
          console.log('Popup opened');
        },
        onClose: () => {
          console.log('Popup closed');
        },
        onSubmit: (payload) => {
          console.log('Form submitted', payload);
        },
      });
    }
  }, [isPopupOpen]);

  const openPopupHandler = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      {/* Button with Emoji for opening the popup */}
      <button
        onClick={openPopupHandler}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px',
          fontSize: '24px',
          backgroundColor: '#007BFF',
          color: 'white',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        📝
      </button>
    </>
  );
};

export default TallyPopup;
