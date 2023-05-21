import { Button } from 'primereact/button'
import React from 'react'
import { changeLng } from '../utils/ortakFunc'

export default function ChangeLanguage() {
    return (
            <div className='d-flex align-items-center me-3'>
                <Button className='p-0 m-0 border-0 me-1' style={{ width: 'fit-content', height: '25px' }} size='small' onClick={() => changeLng('tr')} >
                    <span className="icon-tr" />
                </Button>
                <Button style={{ width: 'fit-content', height: '25px' }} className='p-0 m-0 border-0' size='small' onClick={() => changeLng('en')} >
                    <span className="icon-en" />
                </Button>
            </div>
    )
}
