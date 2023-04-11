import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./MainContainer.css";
import IsError from "./isError/IsError";
import IsLoading from "./IsLoading/IsLoading";
import LibraryElement from "./LibraryElement/LibraryElement";

const MainContainer = () => {
  const {
    isLoading,
    isPagination,
    books,
    error,
    requestValue,
    isCategory,
    isSort,
    startIndex,
  } = useTypedSelector((state) => state.libraryBook);
  const { fetchMoreBooksLibrary } = useActions();

  function getMoreBooksFetch() {
    fetchMoreBooksLibrary(requestValue, isCategory, isSort, startIndex); // пагинация при нажатии кнопки
  }

  if (error) return <IsError message={error} />;

  if (isLoading) return <IsLoading />;

  return (
    <div>
      <div className="LibraryBlock">
        {books.map((el) => (
          <LibraryElement key={el.id} book={el} />
        ))}
      </div>
      <div className="loadMore">
        <button className="loadMore" onClick={getMoreBooksFetch}>
          <p className={isPagination ? "loaderButton" : ""} />
          View more !
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
