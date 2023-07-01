import React, { useState } from 'react'
import { POST, callAPI, getGlobalToast } from '../utils/axiosUtils';
import { handleItemChange } from '../utils/ortakFunc';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import Input from '../components/Input';
import { withTranslation } from 'react-i18next';

function Login(props) {

    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const [apiProgress, setApiProgress] = useState(false);
    const { t } = props;

    async function handleLogin(props) {

        if (!item?.password) {
            getGlobalToast().show({ severity: 'warn', summary: "Parola alanı boş bırakılamaz!", life: 3000 });
        }
        else {
            const res = await callAPI({
                method: POST,
                url: 'api/1.0/login',
                data: item,
                setApiProgress
            })
            localStorage.setItem('isAuthenticate', true);
            navigate("/");
            getGlobalToast().show({ severity: 'success', summary: res.data.message, life: 3000 });
            setItem({});
        }
    }

    return (
        <div className='row mx-1 mt-3 justify-content-center align-items-center'>
            <div className='col-lg-4'>
                <Link to={'/'} className='m-0 p-0 d-flex justify-content-center mb-5'>
                    <img alt='text' src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                </Link>
                <h2>{t("login")}</h2>

                <div className='d-flex align-items-center' style={{ height: '50px' }} >
                    <p >{t("notAccount")}</p>
                    <Link to={'/signup'} className='m-0 p-0' >
                        <Button className='btn btn-primary ml-1' severity="info" label={t("signUp")} text />
                    </Link>
                </div>

                <Input label={t("username")} val={item?.username ?? ''} onChange={(e) => handleItemChange('username', e.target.value, setItem)} />
                <Input label={t("password")} val={item?.password ?? ''} onChange={(e) => handleItemChange('password', e.target.value, setItem)} />

                <button className="btn btn-primary d-flex justify-content-center align-items-center px-3" type="button" onClick={handleLogin} style={{ height: '40px' }} disabled={apiProgress}>
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


const LoginPageWithTranslations = withTranslation()(Login);

export default LoginPageWithTranslations;