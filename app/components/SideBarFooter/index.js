import React from 'react';

import { Icon, Modal, Input, Alert } from 'antd';
import { ipcRenderer } from 'electron';

import styles from './style.css';

export default class SideBarFooter extends React.Component {
    state = {
        modalVisible: false,
        submitting: false,
        error: null
    };

    showAddCatDialog = () => {
        if (this.state.modalVisible) {
            return;
        }
        this.setState({
            modalVisible: true,
            error: null
        });
    };

    closeAddCatDialog = () => {
        this.setState({
            modalVisible: false
        });
    };

    submitCatName = () => {
        const catName = this.catNameInput.refs.input.value // TODO validate cat name
        if (!catName) {
            this.setState({
                error: 'Please input category name'
            });
            return;
        }
        this.setState({
            submitting: true
        });
        setTimeout(() => {
            this.props.onAddNewCategory(catName);
        }, 2000);
    }

    clearError = () => {
        this.setState({
            error: null
        });
    }

    openSettingWindow = () => {
        ipcRenderer.send(EVENTS.OPEN_SETTING_WIN, '');
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.catAdd) {
            const catAddResult = nextProps.catAdd;
            if (catAddResult.success) {
                this.catNameInput.refs.input.value = '';
                this.setState({
                    modalVisible: false,
                    submitting: false
                });
            } else if (catAddResult.error) {
                this.setState({
                    error: catAddResult.error.message,
                    submitting: false
                });
            }
        }
    }

    render () {
        return (
            <div className={styles.groupFooter}>
                <Icon className={styles.settingBtn} type="setting" onClick={this.openSettingWindow}/>
                <Icon className={styles.addCatBtn} type="plus" onClick={this.showAddCatDialog}/>
                <Modal title = "Add a new category" wrapClassName = "vertical-center-modal" width = {275} visible = {this.state.modalVisible} closable = {false} okText = "OK"
                cancelText = "Cancel" confirmLoading = {this.state.submitting} maskClosable = {false} onOk = {this.submitCatName} onCancel = {this.closeAddCatDialog}>
                    {this.state.error && <Alert message={this.state.error} closable showIcon onClose={this.clearError} />}
                    <Input placeholder="category name" size="large" disabled={this.state.submitting} ref={ (node) => { this.catNameInput = node } } />
                </Modal>
            </div>
        )
    }
}
