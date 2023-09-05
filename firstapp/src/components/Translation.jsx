import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Button } from 'react-bootstrap';

export default function Translation() {
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "ru" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    return (
        <div>
            <h1>
                { t('heading', {name: "Alisher", appName: "FullStack Company"}) }
            </h1>

            <Button variant='success' onClick={handleChangeLanguage} >
                English
            </Button>
            <Button variant='warning' onClick={handleChangeLanguage}>
                Русский
            </Button>

        </div>
    )
}
