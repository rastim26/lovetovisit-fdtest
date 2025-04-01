import React from 'react'
import { createPortal } from 'react-dom'

type Props = {
    children: React.ReactNode
}

const Modal = (props: Props) => {
    return createPortal(
        <div className="modal">{props.children}</div>,
        document.body
    )
}
export default Modal
