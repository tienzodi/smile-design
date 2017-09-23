import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import styles from './style.css';

const SubMenu = Menu.SubMenu;

export default class SideBarNavs extends Component {
    state = {
       
    }

    handleClick = (e) => {
        
    };

    onOpenChange = (openKeys) => {
       
    };

    deleteCategory = (id, e) => {
        
    };

    componentWillReceiveProps (nextProps) {
       
    };

    render () {
        return (
            <div className="groupNav">
                <Menu mode="inline" theme="dark" openKeys={this.state.openKeys} selectedKeys={[this.state.current]}
                    onOpenChange={this.onOpenChange} onClick={this.handleClick}>
                    <Menu.Item key='MainMenu'>
                        <Icon type="inbox" /><span>ALL</span>
                    </Menu.Item>
                    <Menu.Item key='UNKNOWN'>
                        <Icon type="exception" /><span>UNCATEGORIZED</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
