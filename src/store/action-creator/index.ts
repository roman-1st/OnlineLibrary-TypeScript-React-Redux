import * as pageBookBookActionCreators from './pageBookActions'
import * as libraryBooksActionCreators from './libraryBooksActions'
import * as AsyncFetchBookdSctionCreators from './async-actions'

export default {
    ...AsyncFetchBookdSctionCreators,           //асинхронные запросы
    ...pageBookBookActionCreators,
    ...libraryBooksActionCreators,
}