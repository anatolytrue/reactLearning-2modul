import React, { Component } from "react";
import css from './Modal.module.css'
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');

        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
            if (e.code === 'Escape') {
                console.log('pressed ESC, need to close modal');
                this.props.onClose();
            }
    }

    handleBackdropClick = e => {
        console.log('click on backdrop')
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className={css.modalBackdrop} onClick={this.handleBackdropClick}>
                <div className={css.modalContent}>
                    {this.props.children}
                </div>
            </div>,
            modalRoot)
    }
}