import { BookPageActionTypes } from '../../types/PageBook';

export const addBookPage = (book: any) => {
    return { type: BookPageActionTypes.ADD_BOOK_PAGE, payload: book, }
}

export const deleteBookPage = () => {
    return { type: BookPageActionTypes.DELETE_BOOK_PAGE }
}
