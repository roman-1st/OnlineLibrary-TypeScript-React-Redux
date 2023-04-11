import { BooksActionTypes, BooksActions, BooksState } from "../../types/LibraryBooks"

const initialState: BooksState = {
    books: [],
    categories: [
        "all",
        "art",
        "history",
        "biography",
        "computers",
        "medical",
        "poetry",
    ],
    isCategory: 'all',
    sorting: ["relevance", "newest"],
    isSort: 'relevance',
    startIndex: 0,
    requestValue: 'книга',
    totalBooks: 0,
    isLoading: false,
    isPagination: false,
    error: null,
}

export const booksLibraryReducer = (state = initialState, action: BooksActions): BooksState => {
    switch (action.type) {
        case BooksActionTypes.SET_REQUEST_VALUE:
            return {
                ...state,
                requestValue: action.payload
            }
        case BooksActionTypes.SET_CATRGORIES:
            return {
                ...state,
                isCategory: action.payload
            }
        case BooksActionTypes.SET_SORTING:
            return {
                ...state,
                isSort: action.payload
            }
        case BooksActionTypes.GET_BOOKS_LIBRARY:
            return {
                ...state,
                isLoading: false,
                error: null,
                books: action.payload,
                startIndex: action.payload.length,
            }
        case BooksActionTypes.SET_INITIAL_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case BooksActionTypes.SET_PAGINATION:
            return {
                ...state,
                isPagination: true,
            }
        case BooksActionTypes.FETCH_LIBRARY_ERROR:
            return {
                ...state,
                isLoading: false,
                isPagination: false,
                error: action.payload,
            }
        case BooksActionTypes.GET_MORE_BOOKS:
            return {
                ...state,
                isPagination: false,
                error: null,
                startIndex: state.startIndex + 20,
                books: [
                    ...state.books,
                    ...action.payload,
                ]
            }
        default:
            return { ...state }
    }
}