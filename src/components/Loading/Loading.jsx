import React from 'react';
import styles from '../../styles/Loading.module.css'; 

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}></div> 
      <p></p>
    </div>
  );
};

export default Loading;
