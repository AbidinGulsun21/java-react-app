import React from 'react'
import { Toast } from 'primereact/toast';
import { setGlobalToast } from '../utils/axiosUtils';

export default function Footer() {
    return (
        <div className='footer bg-primary p-3'>
            <p className='text-light text-center' style={{ textTransform: 'capitalize', fontSize: '12px' }}>all rights reserves made by abidingulsun</p>
            <Toast ref={(el) => setGlobalToast(el)} baseZIndex={1000002} position="bottom-right" />
        </div>

    )
}
