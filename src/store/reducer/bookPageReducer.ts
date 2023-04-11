import { BookPageState } from '../../types/PageBook';
import { BookPageActionTypes, BookPageActions } from './../../types/PageBook';

const initialState: BookPageState = {
    bookPage: [],
    loadingBookPage: false,
    error: null,
}

export const bookPageReducer = (state = initialState, action: BookPageActions): BookPageState => {
    switch (action.type) {
        case BookPageActionTypes.LOADING_BOOK_PAGE:
            return {
                ...state,
                loadingBookPage: true,
            }
        case BookPageActionTypes.ADD_BOOK_PAGE:
            return {
                ...state,
                bookPage: action.payload,
                loadingBookPage: false,
            }
        case BookPageActionTypes.DELETE_BOOK_PAGE:
            return {
                ...state,
                bookPage: [],
                loadingBookPage: false,
            }
        case BookPageActionTypes.ERROR_BOOK_PAGE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}