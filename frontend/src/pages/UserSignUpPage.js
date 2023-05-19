import React, { useState } from 'react'
import { handleItemChange } from '../utils/ortakFunc';
import { POST, callAPI, getGlobalToast } from '../utils/axiosUtils';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function UserSignUpPage() {

    const [item, setItem] = useState({});
    const [agreed, setAgreed] = useState(false);
    const [apiProgress, setApiProgress] = useState(false);
    const [errMessage, setErrMessage] = useState(false);


    async function handleCreateUser() {

        if (!item?.passwordRepeat) {
            getGlobalToast().show({ severity: 'warn', summary: "Parola tekrar alanı boş bırakılamaz!", life: 3000 });
        }
        else {
            if (item?.passwordRepeat !== item?.password) {
                getGlobalToast().show({ severity: 'warn', summary: "Parolalar eşleşmiyor", life: 3000 });
            } else {
                const res = await callAPI({
                    method: POST,
                    url: 'api/1.0/users',
                    data: item,
                    setApiProgress
                })
                getGlobalToast().show({ severity: 'success', summary: res.data.message, life: 3000 });
                setItem({});
            }
        }
    }


    return (

        <div className='row justify-content-center align-items-center h-100 my-5' >
            <div className='col-lg-8 card p-5 mb-5'>
                <Link to={'/'} className='m-0 p-0 d-flex justify-content-center mb-5'>
                    <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                </Link>
                <h2>Sign Up</h2>

                <div className='d-flex align-items-center' style={{ height: '50px' }} >
                    <p >Zaten bir hesabınmı var? </p>
                    <Link to={'/login'} className='m-0 p-0' >
                        <Button severity="info" label="Giriş Yap" text />
                    </Link>
                </div>

                <div>
                    <label className="form-check-label">Username</label>
                    <input className="form-control" value={item?.username ?? ''} type='text' onChange={(e) => handleItemChange('username', e.target.value, setItem)} />
                </div>
                <div className="my-3">
                    <label className="form-check-label">Display name</label>
                    <input className="form-control" value={item?.displayName ?? ''} type='text' onChange={(e) => handleItemChange('displayName', e.target.value, setItem)} />
                </div>

                <div className="my-3">
                    <label className="form-check-label">Password</label>
                    <input className="form-control" value={item?.password ?? ''} type='password' onChange={(e) => handleItemChange('password', e.target.value, setItem)} />
                </div>

                <div className="my-3">
                    <label className="form-check-label">Password repeat*</label>
                    <input className="form-control" value={item?.passwordRepeat ?? ''} required type='password' onChange={(e) => handleItemChange('passwordRepeat', e.target.value, setItem)} />
                </div>

                <div className="mb-3">
                    <label className="form-check-label me-1">Agreed</label>
                    <input type='checkbox' className="form-check-input" onClick={(e) => setAgreed(e.target.checked)} />
                </div>

                
                <div className="mb-3">
                    <label className="form-check-label me-1">Agreed</label>
                    <input type='checkbox' className="form-check-input" onClick={(e) => setAgreed(e.target.checked)} />
                </div>
                <div className="mb-3">
                    <label className="form-check-label me-1">Agreed</label>
                    <input type='checkbox' className="form-check-input" onClick={(e) => setAgreed(e.target.checked)} />
                </div>
                <div className="mb-3">
                    <label className="form-check-label me-1">Agreed</label>
                    <input type='checkbox' className="form-check-input" onClick={(e) => setAgreed(e.target.checked)} />
                </div>
                <div className="mb-3">
                    <label className="form-check-label me-1">Agreed</label>
                    <input type='checkbox' className="form-check-input" onClick={(e) => setAgreed(e.target.checked)} />
                </div>

                {errMessage &&
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>{item?.username}</strong> Böyle bir kullanıcı zaten mevcut.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setErrMessage(false)}></button>
                    </div>
                }

                <button className="btn btn-primary d-flex justify-content-center align-items-center px-3" type="button" onClick={handleCreateUser} style={{ height: '30px' }} disabled={!agreed || apiProgress}>
                    <div className="d-flex align-items-center">
                        <p className="m-0">Sign Up</p>
                        {apiProgress &&
                            <div>
                                <span className="spinner-border spinner-border-sm m-0" role="status" aria-hidden="true"></span>
                                <span className="visually-hidden m-0">Loading...</span>
                            </div>
                        }
                    </div>
                </button>

            </div>
        </div>

    )
}
