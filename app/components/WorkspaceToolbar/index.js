import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import styles from './style.css';

class WorkspaceToolbar extends Component {
  render() {
    return (
		<div className={styles.workspaceToolbar}>
			<ul className={styles.toolbarIconList}>
				<li><Button shape="circle" icon="upload" /></li>
				<li><Button shape="circle" icon="plus" /></li>
			</ul>
		</div>
    );
  }
}

export default WorkspaceToolbar;
