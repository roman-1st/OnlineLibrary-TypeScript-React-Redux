import React, { useEffect, useRef }     from "react";
import { useActions }                   from "../../hooks/useActions";
import { useTypedSelector }             from "../../hooks/useTypedSelector";

import './SearchContainer.css'

const SearchContainer: React.FC = () => {
    const { requestValue, categories, isCategory, isSort, sorting, startIndex, books} = useTypedSelector(state => state.libraryBook)
    const { setRequestValue, setCategories, setSorting, fetchBooksLibrary } = useActions()

    useEffect( () => {  
        fetchBooksLibrary(requestValue, isCategory, isSort)                                
    }, [])

    const bookTitle = useRef<HTMLInputElement>(null)
    function changeRequestHandler (e: React.ChangeEvent<HTMLInputElement>) {        // получение названия книги
        setRequestValue(String(bookTitle.current?.value))
    }

    function changeCategoryHandler (e: React.ChangeEvent<HTMLSelectElement>) {      // выбор категории для поиска
        setCategories(String(e.target.value))
    }

    function changeRelevanceHandler (e: React.ChangeEvent<HTMLSelectElement>) {     // выбор по популярности/новизне
        setSorting(String(e.target.value))
    }

    function getBooksFetch () {                                                     // отправка api запроса 
        fetchBooksLibrary(requestValue, isCategory, isSort)
    }

    function search(e: any) {                                                       // отправка api запроса  при нажатии enter       
        if (e.keyCode == 13) fetchBooksLibrary(requestValue, isCategory, isSort)
    }

    return (
        <div className="header">
            <div>
                <input 
                onChange={ (e) => changeRequestHandler(e)}
                onKeyDown={(e) => search(e)}
                ref={bookTitle}
                placeholder="enter book title"
                />
                <select
                defaultValue={isCategory}
                onChange={ (e) => changeCategoryHandler(e) }
                >
                    {categories.map( el => 
                        <option key={categories.indexOf(el)}> {el} </option>
                    )}
                </select>
                <select
                onChange={ (e) => changeRelevanceHandler(e)}
                defaultValue={isSort}>
                    {sorting.map( el => 
                        <option key={sorting.indexOf(el)}> {el} </option>
                    )}
                </select>
                <button
                onClick={getBooksFetch}
                > search </button>

            </div>
        </div>
    )
}

export default SearchContainer