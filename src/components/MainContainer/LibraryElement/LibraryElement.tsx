import React from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import "./LibraryElement.css";

interface LibraryBooksBlockProps {
  book: any[];
}

export default function LibraryElement(props: LibraryBooksBlockProps) {
  const { addBookPage } = useActions();
  const libraryElement: any = props.book;

  let pic: string; // url картинки
  let author = libraryElement.volumeInfo.authors; // автор книги
  let categories = libraryElement.volumeInfo.categories; // категория книги
  let id = libraryElement.id; // id книги
  let title = libraryElement.volumeInfo.title; // название книги

  typeof libraryElement.volumeInfo.imageLinks === "undefined" // если изображение не пришло
    ? (pic =
        "https://i.pinimg.com/736x/a3/32/eb/a332ebb5ace6d4a9ecc505efab52ef77.jpg") // url-заглушка для карточки книги
    : (pic = libraryElement.volumeInfo.imageLinks.thumbnail); // то подгужается стандартное

  if (!libraryElement.volumeInfo.categories) categories = "No actual category"; // если категория не пришла
  if (!libraryElement.volumeInfo.authors) author = "Author not found"; // если автор не пришел

  function addToBookPage() {
    addBookPage(libraryElement);
  }

  return (
    <div onClick={addToBookPage} className="bookCard" key={id}>
      <img src={pic} />
      <p className="categories"> {categories} </p>
      <Link className="goToBook" to={`/book/${id}/?key=${id}`}>
        <h2 className="title"> {title} </h2>
      </Link>
      <Link className="goToBook" to={`/book/${id}/?key=${id}`}>
        <p className="authors"> {author} </p>
      </Link>
    </div>
  );
}
