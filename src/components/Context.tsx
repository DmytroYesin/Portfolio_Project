import React, { useState } from 'react';

export const langContext = React.createContext(
    {}
);

export const useContextController = () => {
    const [language, setLanguage] = useState(localStorage.getItem('lang'));
    let lang = () => language == null ? 'en' : language;
    localStorage.setItem('lang', lang());
    return { language: language, setLanguage: setLanguage };
};