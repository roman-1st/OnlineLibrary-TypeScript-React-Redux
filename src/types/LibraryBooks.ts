export interface BooksState {
    books: any[],
    categories: string[],
    isCategory: string,
    sorting: string[],
    isSort: string,
    startIndex: number,
    requestValue: string,
    totalBooks: number,
    isLoading: boolean,
    isPagination: boolean,
    error: null | string,
}

// export interface Book {
//     id: string,
//     volumeInfo: BookInformation,
// }

export interface BookInformation {
    categories: string[],
    imageLinks: [], //
    publishedDate: string,
    title: string,
}

// export interface Books {
//     items: any[],
// }

export enum BooksActionTypes {
    SET_REQUEST_VALUE = "SET_REQUEST_VALUE",
    SET_CATRGORIES = "SET_CATRGORIES",
    SET_SORTING = "SET_SORTING",

    GET_BOOKS_LIBRARY = "GET_BOOKS_LIBRARY",
    SET_INITIAL_LOADING = "SET_INITIAL_LOADING",
    SET_PAGINATION = "SET_PAGINATION",
    GET_MORE_BOOKS = "GET_MORE_BOOKS",

    FETCH_LIBRARY_ERROR = "FETCH_LIBRARY_ERROR",
    LOADING_BOOK_PAGE = "LOADING_BOOK_PAGE",
}

interface SetReqestValueAction {
    type: BooksActionTypes.SET_REQUEST_VALUE,
    payload: string,
}

interface SetCategoriesAction {
    type: BooksActionTypes.SET_CATRGORIES,
    payload: string,
}

interface SetSortingAction {
    type: BooksActionTypes.SET_SORTING,
    payload: string,
}

interface GetBooksLibraryAction {
    type: BooksActionTypes.GET_BOOKS_LIBRARY,
    payload: any[],
}

interface SetIsLoadingAction {
    type: BooksActionTypes.SET_INITIAL_LOADING,
}

interface SetPagination {
    type: BooksActionTypes.SET_PAGINATION
}

interface GetMoreBooksAction {
    type: BooksActionTypes.GET_MORE_BOOKS,
    payload: any[],
}

interface FetchLibraryErrorAction {
    type: BooksActionTypes.FETCH_LIBRARY_ERROR
    payload: string,
}



export type BooksActions =
    SetReqestValueAction |
    SetCategoriesAction |
    SetSortingAction |
    GetBooksLibraryAction |
    SetIsLoadingAction |
    GetMoreBooksAction |
    FetchLibraryErrorAction |
    SetPagination 