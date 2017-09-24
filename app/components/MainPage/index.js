// @flow
import React, { Component } from 'react';
import styles from './style.css';

import SideBar from '../../containers/SideBar';
import MainDetailPanel from '../../containers/MainDetailPanel';

export default class MainPage extends Component {
  render() {
    return (
      <div className={styles.main} >
        <div className={styles.container} data-tid="container">
          <SideBar />
          <MainDetailPanel />
        </div>
      </div>
    );
  }
}
