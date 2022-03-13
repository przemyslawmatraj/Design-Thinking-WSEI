import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
const ReadMore = ({ children, className, btnColor }) => {
  const text = children;
  const [isFull, setFullText] = useState(false);
  const result = isFull ? text : text.slice(0, 200);
  function toggleIsFull() {
    setFullText(!isFull);
  }
  return (
    <>
      <p className={className}>{result}</p>
      <Button onClick={toggleIsFull} tag="span" color={btnColor}>
        {isFull ? 'CZYTAJ MNIEJ' : 'CZYTAJ WIĘCEJ'}
      </Button>
    </>
  );
};

ReadMore.propTypes = {
  btnColor: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default ReadMore;
