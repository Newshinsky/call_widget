import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import listReducer from "../pages/second-page/reducer/ListReducer";


export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    purposeCall: listReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

