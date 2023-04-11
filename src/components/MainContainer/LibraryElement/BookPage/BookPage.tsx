import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import IsLoading from "../../IsLoading/IsLoading";

import "./BookPage.css";

const BookPage = () => {
  const { bookPage, loadingBookPage, error } = useTypedSelector((state) => state.pageBook)
  const { books } = useTypedSelector((state) => state.libraryBook);
  const { fetchBookPage, deleteBookPage } = useActions();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get("key");

  function goToLibrary() {
    const navElem = books.find((el) => el.id === key); 
    navElem ? navigate(-1) : navigate("/");
    deleteBookPage();
  }

  useEffect(() => {
    if (bookPage.length === 0) fetchBookPage(key);
  }, []);

  const book: any = bookPage;
  let title; // название книги
  let author; // автор книги
  let description; // описание книиги
  let category; // категория поиска книги
  let publishedDate; // дата публикации книги
  let previewLink; // ссылка на гугл
  let pic: string = ""; // utl изображения

  if (Object.keys(bookPage).length > 0) {
    title = bookPage.volumeInfo.title;
    author = bookPage.volumeInfo.authors;
    description = bookPage.volumeInfo.description;
    category = bookPage.volumeInfo.categories;
    publishedDate = bookPage.volumeInfo.publishedDate;
    previewLink = bookPage.volumeInfo.previewLink;

    typeof bookPage.volumeInfo.imageLinks === "undefined" // если изображение не пришло
      ? (pic =
          "https://i.pinimg.com/736x/a3/32/eb/a332ebb5ace6d4a9ecc505efab52ef77.jpg") // то подгужается стандартное
      : (pic = bookPage.volumeInfo.imageLinks.thumbnail);
  }

  if (loadingBookPage) return <IsLoading />; // лоадер загрузки
  if (error) return <p> {error} </p>; // сообщение с текстом ошибки

  return (
    <div className="bookContainer">
      <div className="mainContainer">
        <img src={pic} className="img" />
        <div className="bookPageInformationContainer">
          <h2> {title} </h2>
          <h5> {author} </h5>
          <h6> {publishedDate} </h6>
          <p> {description} </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <a href={previewLink}> Click here for a link to the book demo </a>
            <button onClick={goToLibrary}> go back to library </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
