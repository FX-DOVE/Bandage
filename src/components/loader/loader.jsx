import styles from '../../styles/loader.module.css'
import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const loader = () => {
    return (
      <div className={styles["loader"]}>
        <div className={styles["spinner"]}></div>
      </div>
    );
  };
  
  export default loader;