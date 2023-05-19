import React from 'react'

export default function Input(props) {
    return (
        <>
            <div className="my-3">
                <label className="form-check-label">{props.label}</label>
                <input className="form-control" value={props.val ?? ''} type='text' onChange={props.onChange} />
                {props.error && !props.val && <label className="form-check-label text-danger">{props.error.charAt(0).toUpperCase() + props.error.slice(1)}</label>}
            </div>

        </>
    )
}
