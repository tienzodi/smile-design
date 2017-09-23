// @flow
import React, { Component } from 'react';
import styles from './style.css';

import SideBar from '../../containers/SideBar';

export default class MainPage extends Component {
  render() {
    return (
      <div className={styles.main} >
        <div className={styles.container} data-tid="container">
          <SideBar />
        </div>
      </div>
    );
  }
}
