import i18n from 'i18next';
import { createRoot } from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import App from './app';
import { default as kz, default as ru } from './locales/ru.json';
import { HashRouter } from 'react-router-dom';

import 'normalize.css';
import "./index.css"
import { Provider } from 'react-redux';
import { store } from './store/rootReducer';


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
    (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
