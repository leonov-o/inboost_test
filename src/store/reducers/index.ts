import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer.ts";

export const rootReducer = combineReducers({
  main: mainReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
