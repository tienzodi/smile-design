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
                    <Menu.Item key='HOME'>
                        <Icon type="inbox" /><span>HOME</span>
                    </Menu.Item>
                    <Menu.Item key='ABOUT'>
                        <Icon type="exception" /><span>ABOUT</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
