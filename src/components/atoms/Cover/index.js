import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import Parallax from '../../../hooks/parallax';
const Cover = ({ children, delay }) => {
  const ref = useRef();
  const [divOffset, setDivOffset] = useState(null);
  let offsetY = Parallax();
  useEffect(() => {
    if (ref.current) {
      setDivOffset(ref.current.getBoundingClientRect());
    }
  }, []);
  return (
    <>
      <div className={css.overlaySection} ref={ref}>
        <div className={css.overlay}>
          <div
            className={css.overlay}
            style={{
              transform: `scale(${
                divOffset?.y < offsetY - delay && offsetY < divOffset?.y + divOffset?.height
                  ? 1 + ((offsetY - delay - divOffset?.y) / divOffset?.height) * 400
                  : offsetY > divOffset?.y + divOffset?.height
                  ? 400
                  : 1
              })`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              viewBox="0 0 4519 3213"
              preserveAspectRatio="xMidYMid slice"
              className={css.plus}
            >
              <path
                fill="#85BD4B"
                d="M0,0V3213H4519V0ZM2249.52,1545a3.8,3.8,0,1,1-3.8,3.8A3.8,3.8,0,0,1,2249.52,1545Zm-39.59,3.8a3.69,3.69,0,1,1,3.67,3.7,3.7,3.7,0,0,1-3.67-3.7Zm-.95,15.27a6.58,6.58,0,0,1,9.84.62,9.86,9.86,0,0,1,5.12-2.39,8.24,8.24,0,0,1-.64-3.18v0a8.3,8.3,0,1,1,10.68,7.94,10,10,0,1,1-18.14,7.87,6.45,6.45,0,0,1-2.21.38,6.58,6.58,0,0,1-4.65-11.22Zm8.34,40.22a5.22,5.22,0,1,1,1.53-3.69A5.18,5.18,0,0,1,2217.32,1604.32Zm12.35,16.09a4.78,4.78,0,0,1-3.38-8.17,4.78,4.78,0,0,1,8.16,3.38A4.79,4.79,0,0,1,2229.67,1620.41Zm79.5-11.81v0c-2.52.63-5.87.94-5.77,2.73a19.14,19.14,0,0,0,1.16,4.5,4.46,4.46,0,0,1-.42,3l-.11.22c-.62,1.39.39,1.85-.21,3.34,0,.11-.09.22-.14.33-.71,1.46-2.22,3-3,5-.33.86.06,2,.45,3.35a8.88,8.88,0,0,1-.86,8c-2.11,3.31-5.88,2.4-13.63,2.5s-9.54-1.06-12.79,6.6l-.1.24c-2.26,5.4-5,14.53-6.44,19.54a29.51,29.51,0,0,1-11.82-40l.29-.52a13.43,13.43,0,0,1-8.41-17,13.58,13.58,0,0,1,.89-2,13,13,0,1,1-9.13-24.06,13.12,13.12,0,0,1,9.25-17.85,7.64,7.64,0,0,1-.11-1.36v0a8.37,8.37,0,0,1,16.74,0,8.15,8.15,0,0,1-.33,2.33l.49,0a16.59,16.59,0,0,1,.27-1.74,21.73,21.73,0,0,1,21.31-17.48,13.13,13.13,0,0,1,1.55.06,52.88,52.88,0,0,1,4.62,4.73,33.6,33.6,0,0,1,4,5.57c1.78,3.43,6.22,15.61,6.25,19.49a2.28,2.28,0,0,1,0,.37c-.26,3.21-2.45,4.64-1.35,7.2l.25.49s9.65,16.66,9.85,18.33S2311.69,1608,2309.17,1608.6Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
Cover.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default Cover;
