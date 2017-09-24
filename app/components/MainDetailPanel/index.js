import React, { Component } from 'react';

import Workspace from '../../containers/Workspace';
import WorkspaceToolbar from '../../containers/WorkspaceToolbar';

import styles from './style.css';

class MainDetailPanel extends Component {
  render() {
    return (
      <div className={styles.right}>
          <header className={styles.detailHeader}>
              <WorkspaceToolbar />
          </header>
          <section className={styles.detailContent} id="detailContent">
              <Workspace />
          </section>
      </div>
    );
  }
}

export default MainDetailPanel;
