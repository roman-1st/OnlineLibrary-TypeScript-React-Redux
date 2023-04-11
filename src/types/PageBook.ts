export interface BookPageState {
    bookPage: any,
    loadingBookPage: boolean,
    error: null | string,
}

export enum BookPageActionTypes {
    LOADING_BOOK_PAGE = "LOADING_BOOK_PAGE",
    ADD_BOOK_PAGE = "ADD_BOOK_PAGE",
    DELETE_BOOK_PAGE = "DELETE_BOOK_PAGE",
    ERROR_BOOK_PAGE = "ERROR_BOOK_PAGE"
}

interface LoadingBookPageAction {
    type: BookPageActionTypes.LOADING_BOOK_PAGE
}

interface AddBookPageAction {
    type: BookPageActionTypes.ADD_BOOK_PAGE,
    payload: any[],
}

interface DeleteBookPageAction {
    type: BookPageActionTypes.DELETE_BOOK_PAGE,
}

interface ErrorBookPageAction {
    type: BookPageActionTypes.ERROR_BOOK_PAGE,
    payload: string,
}

export type BookPageActions =
    LoadingBookPageAction |
    AddBookPageAction |
    DeleteBookPageAction |
    ErrorBookPageAction
