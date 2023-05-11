import React, { useEffect, useState } from 'react'
import { handleItemChange } from './utils/ortakFunc';
import { POST, callAPI } from './utils/axiosUtils';

export default function UserSignUpPage() {

    const [item, setItem] = useState({});
    const [agreed, setAgreed] = useState(false);

    useEffect(() => {
        console.log("item", item);
    }, [item])


    async function handleCreateUser() {
        if (item?.passwordRepeat !== item?.password) {
            console.error("Parolalar eşleşmiyor")
        } else {
            const res = await callAPI({
                method: POST,
                url: 'api/1.0/users',
                data: item,
            })
            console.log("res",res.data.message);
            console.log("başarı ile eklendi");
        }

    }



    return (
        <div className='row mx-1 mt-3'>
            <div className='col-lg-8'>

                <h2>Sign Up</h2>
                <div>
                    <label className="form-check-label">Username</label>
                    <input className="form-control" type='text' onChange={(e) => handleItemChange('username', e.target.value, setItem)} />
                </div>
                <div className="my-3">
                    <label className="form-check-label">display name</label>
                    <input className="form-control" type='text' onChange={(e) => handleItemChange('displayName', e.target.value, setItem)} />
                </div>

                <div className="my-3">
                    <label className="form-check-label">Password</label>
                    <input className="form-control" type='password' onChange={(e) => handleItemChange('password', e.target.value, setItem)} />
                </div>

                <div className="my-3">
                    <label className="form-check-label">Password repeat*</label>
                    <input className="form-control" type='password' onChange={(e) => handleItemChange('passwordRepeat', e.target.value, setItem)} />
                </div>

                <div className="mb-3">
                    <label className="form-check-label me-1">Agreed</label>
                    <input type='checkbox' className="form-check-input" onClick={(e) => setAgreed(e.target.checked)} />
                </div>

                <button type='submit' className="btn btn-primary" disabled={!agreed} onClick={handleCreateUser}  >Sign Up</button>


            </div>
        </div>
    )
}
