import { BooksActionTypes } from '../../types/LibraryBooks';

export const setRequestValue = (value: string) => {
    return { type: BooksActionTypes.SET_REQUEST_VALUE, payload: value }
}

export const setCategories = (value: string) => {
    return { type: BooksActionTypes.SET_CATRGORIES, payload: value }
}

export const setSorting = (value: string) => {
    return { type: BooksActionTypes.SET_SORTING, payload: value }
}