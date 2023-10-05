import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk";
import { apiReducer } from "./reducers";

export const store = configureStore({

    reducer: apiReducer,
    middleware: [thunk]
}
)

