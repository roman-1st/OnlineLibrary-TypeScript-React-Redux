import { BookPageActions, BookPageActionTypes } from './../../types/PageBook';

import { BooksActions, BooksActionTypes } from '../../types/LibraryBooks';
import { Dispatch } from "redux"
import axios from 'axios';

export const fetchBooksLibrary = (requestValue: string, isCategory: string, isSort: string) => {
    return async (dispatch: Dispatch<BooksActions>) => {
        try {
            dispatch({ type: BooksActionTypes.SET_INITIAL_LOADING })
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes?', {
                params: {
                    q: requestValue,
                    subject: isCategory,
                    // dq: requestValue,
                    orderBy: isSort,
                    startIndex: 0,
                    langRestrict: 'ru',
                    printType: 'books',
                    maxResults: 20,
                    key: "AIzaSyB81jUn3WAhwSdoDGud5ZBS6EwqvXIHPqE",
                }
            })
            dispatch({ type: BooksActionTypes.GET_BOOKS_LIBRARY, payload: response.data.items })
        } catch (e: any) {
            dispatch({ type: BooksActionTypes.FETCH_LIBRARY_ERROR, payload: e.message })
        }
    }
}

export const fetchMoreBooksLibrary = (requestValue: string, isCategory: string, isSort: string, startIndex: number) => {
    return async (dispatch: Dispatch<BooksActions>) => {
        try {
            dispatch({ type: BooksActionTypes.SET_PAGINATION })
            const response = await axios.get("https://www.googleapis.com/books/v1/volumes?", {
                params: {
                    q: requestValue,
                    subject: isCategory,
                    // dq: requestValue,
                    orderBy: isSort,
                    startIndex: startIndex,
                    langRestrict: 'ru',
                    printType: 'books',
                    maxResults: 20,
                    key: "AIzaSyB81jUn3WAhwSdoDGud5ZBS6EwqvXIHPqE",
                }
            })
            dispatch({ type: BooksActionTypes.GET_MORE_BOOKS, payload: response.data.items })
        } catch (e: any) {
            dispatch({ type: BooksActionTypes.FETCH_LIBRARY_ERROR, payload: e.message })
        }
    }
}

export const fetchBookPage = (bookId: string | null) => {
    return async (dispatch: Dispatch<BookPageActions>) => {
        try {
            dispatch({ type: BookPageActionTypes.LOADING_BOOK_PAGE })
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`, {
                params: {
                    // volumeId: bookId,
                    key: "AIzaSyB81jUn3WAhwSdoDGud5ZBS6EwqvXIHPqE",
                }
            })
            dispatch({ type: BookPageActionTypes.ADD_BOOK_PAGE, payload: response.data })
        } catch (e: any) {
            dispatch({ type: BookPageActionTypes.ERROR_BOOK_PAGE, payload: e.message })
        }
    }
}