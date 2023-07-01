import React, { useState } from 'react'
import { handleItemChange } from '../utils/ortakFunc';
import { POST, callAPI, getGlobalToast } from '../utils/axiosUtils';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import Input from '../components/Input';
import { withTranslation } from 'react-i18next';


function UserSignUpPage(props) {

    const [item, setItem] = useState({});
    const [agreed, setAgreed] = useState(false);
    const [apiProgress, setApiProgress] = useState(false);
    const { t } = props;



    async function handleCreateUser() {
        if (item?.passwordRepeat !== item?.password) {
            getGlobalToast().show({ severity: 'warn', summary: "Parola alanı boş veya birbirine uymuyor!", life: 5000 });
        } else {
            const res = await callAPI({
                method: POST,
                url: 'api/1.0/users',
                data: item,
                setApiProgress,
                headers: { 'accept-language': 'ar' }
            })
            setItem({});
            getGlobalToast().show({ severity: 'success', summary: res.data.message, life: 3000 });
        }
    }


    return (

        <div className='row justify-content-center align-items-center h-100 my-5' >
            <div className='col-lg-8 card p-5 mb-5' >
                <Link to={'/'} className='m-0 p-0 d-flex justify-content-center mb-5'>
                    <img alt="test" src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                </Link>
                <h2>{t('signUp')}</h2>

                <div className='d-flex align-items-center' style={{ height: '50px' }} >
                    <p>{t("alreadyHaveAccount")}  </p>
                    <Link to={'/login'} className='m-0 p-0' >
                        <Button className='p-0 mx-2' severity="info" label={t("login")} text />
                    </Link>
                </div>


                <Input label={t("username")} val={item?.username ?? ''} onChange={(e) => handleItemChange('username', e.target.value, setItem)} />

                <Input label={t("displayName")} val={item?.displayName ?? ''} onChange={(e) => handleItemChange('displayName', e.target.value, setItem)} />

                <Input label={t("password")} val={item?.password ?? ''} onChange={(e) => handleItemChange('password', e.target.value, setItem)} />

                <Input label={t("passwordRepeat") + "*"} val={item?.passwordRepeat ?? ''} onChange={(e) => handleItemChange('passwordRepeat', e.target.value, setItem)} />


                <div className="mb-3">
                    <label className="form-check-label me-1">{t("agreed")}</label>
                    <input type='checkbox' className="form-check-input" onClick={(e) => setAgreed(e.target.checked)} />
                </div>

                <button className="btn btn-primary d-flex justify-content-center align-items-center px-3" type="button" onClick={handleCreateUser} style={{ height: '30px' }}
                    disabled={!agreed || apiProgress || !item?.password || !item?.passwordRepeat}>
                    <div className="d-flex align-items-center">
                        <p className="m-0">{t("signUp")}</p>
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

const UserSignUpPageWithTranslations = withTranslation()(UserSignUpPage);


export default UserSignUpPageWithTranslations;