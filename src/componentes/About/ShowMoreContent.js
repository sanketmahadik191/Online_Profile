import React, { useState } from 'react';

const ShowMoreContent = ({ text }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const containerStyle = {
    maxHeight: showMore ? 'none' : '3em',
    overflow: 'hidden',
    position: 'relative',
  };

  const buttonStyle = {
    transform: 'translateX(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    alignSelf:'center',
    margin:'15px 0 0 40px',
    border:'2px solid black',
    borderRadius:'10px'
  };

  return (
    <div>
      <div style={containerStyle}>{text}</div>
      {
        <button style={buttonStyle} onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      }
    </div>
  );
};

export default ShowMoreContent;
