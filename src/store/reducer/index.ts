import { bookPageReducer } from './bookPageReducer';
import { combineReducers } from "redux";
import { booksLibraryReducer } from './booksLibraryReducer';

export const rootReducer = combineReducers({
    libraryBook: booksLibraryReducer,
    pageBook: bookPageReducer,
})

export type RootState = ReturnType<typeof rootReducer>