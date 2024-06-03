import React from 'react';
import styles from '../../styles/Error.module.css'; 

const Error = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}></div> 
      <p> please check your internet connection . . . </p>
    </div>
  );
};

export default Error;
