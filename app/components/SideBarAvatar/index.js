import React, { Component } from 'react';
import styles from './style.css';

const defaultAvatar = require('../../../resources/images/avatar-default.png');

export default class SideBarAvatar extends Component {
    getAvatarUrl = () => {
        if (!this.props.profile || !this.props.profile.avatarUrl) {
            return defaultAvatar;
        }
        return this.props.profile.avatarUrl;
    };

    getHomepageUrl = () => {
        if (!this.props.profile || !this.props.profile.avatarUrl) {
            return 'javascript:';
        }
        return this.props.profile.htmlUrl;
    };

    render() {
        return (
            <div className={styles.profileCard}>
                <a href={this.getHomepageUrl()} target="_blank">
                    <img className={styles.profileAvatar} src={this.getAvatarUrl()}/>
                </a>
                {this.props.profile &&
                <p className={styles.profileName}>{this.props.profile.name || 'Tien Pham'}</p>}
            </div>
        );
    }
}
