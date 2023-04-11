import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/MainContainer/Layout';
import BookCard from './components/MainContainer/LibraryElement/BookPage/BookPage';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainContainer />} />
            <Route path="/book/:id" element={<BookCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
