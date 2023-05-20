import React, { Fragment } from 'react'

export default function Input(props) {
    return (
        <Fragment>
            <div className="my-3">
                <label className="form-check-label">{props.label}</label>
                <input className="form-control" value={props.val ?? ''} type='text' onChange={props.onChange} />
            </div>
        </Fragment>
    )
}
