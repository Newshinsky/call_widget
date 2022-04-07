
import { createContext, Dispatch, useReducer, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import EntryDataPage from './Pages/EntryDataPage/Components';
import listReducer, { defaultState } from './Pages/EntryDataPage/Reducer/ListReducer';
import { defaultStateType } from './Pages/EntryDataPage/Types';
import IntroductoryPage from './Pages/IntroductoryPage/Components';

export const ContextApp = createContext<{ state: defaultStateType, dispatch: Dispatch<any> }>({ state: defaultState, dispatch: () => null })

const App = () => {
    const [page, setPage] = useState('IntroductoryPage')

    const [state, dispatch] = useReducer(listReducer, defaultState);

    return (
        <div className="App">
            <ContextApp.Provider value={{ state, dispatch }}>
                {page === 'IntroductoryPage' && (
                    <>
                        <IntroductoryPage setPage={setPage} />
                    </>
                )}
                {page === 'EntryDataPage' &&
                    (<>
                        <EntryDataPage setPage={setPage} />
                    </>)}
            </ContextApp.Provider>
        </div >
    );
};

export default hot(App);
