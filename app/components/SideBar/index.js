import React, { Component } from 'react';
import styles from './style.css';

import SideBarAvatar from '../../containers/SideBarAvatar';
import SideBarNavs from '../../containers/SideBarNavs';
import SideBarFooter from '../../containers/SideBarFooter';

export default class SideBar extends Component {
    render () {
        return (
            <div className="left" >
                <header id="titlebar"></header>
                <SideBarAvatar />
                <SideBarNavs />
                <SideBarFooter />
            </div>
        );
    }
}
