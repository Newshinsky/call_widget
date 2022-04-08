import App from './App';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { createRoot } from 'react-dom/client';

import { default as kz } from './locales/kz.json';
import { default as ru } from './locales/ru.json';

import 'normalize.css';
import './index.css';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru,
            kz,
        },
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    });

const modalRoot = document.getElementById("root") as HTMLElement;
const root = createRoot(modalRoot)
root.render
    (<App />)


