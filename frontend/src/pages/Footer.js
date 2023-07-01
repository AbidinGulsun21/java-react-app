import React from 'react'
import { Toast } from 'primereact/toast';
import { setGlobalToast } from '../utils/axiosUtils';
import { withTranslation } from 'react-i18next';

function Footer(props) {

    const { t } = props;
    return (
        <div className='footer bg-primary p-3'>
            <p className='text-light text-center' style={{ textTransform: 'capitalize', fontSize: '12px' }}>{t("footerText")}</p>
            <Toast ref={(el) => setGlobalToast(el)} baseZIndex={1000002} position="bottom-right" />
        </div>

    )
}


const translateWithFooterPage = withTranslation()(Footer);
export default translateWithFooterPage;