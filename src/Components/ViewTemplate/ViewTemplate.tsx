import React from 'react'

type Props = {
    children: React.ReactNode
    title?: string
    className: string
}

const ViewTemplate = (props: Props) => {
    return (
        <>
            {props.title && (
                <div className="main-header">
                    <h2>{props.title}</h2>
                </div>
            )}
            <div className={props.className}>{props.children}</div>
        </>
    )
}
export default ViewTemplate
