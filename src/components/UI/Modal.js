import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const BackDrop = (props) => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const protalElement = document.getElementById('protal_overlay')

const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<BackDrop/>, protalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>
            , protalElement)}
    </>
  )
}

export default Modal