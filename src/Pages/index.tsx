import React, { createContext, Dispatch, useReducer, useState } from "react";

import EntryDataPage from './EntryDataPage/Components/EntryDataPage';
import listReducer, { defaultState } from './EntryDataPage/Reducer/ListReducer';
import { ActionsType, defaultStateType } from './EntryDataPage/Types';
import IntroductoryPage from './IntroductoryPage/Components/IntroductoryPage';


export const ContextApp = createContext<{ state: defaultStateType, dispatch: Dispatch<ActionsType> }>({ state: defaultState, dispatch: () => null })

const PagesLayout = () => {

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
    )
}
export default PagesLayout;
