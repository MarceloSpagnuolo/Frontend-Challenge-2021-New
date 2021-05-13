import React, { useEffect, useState } from "react";
import { getCategories, searchBooks } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./Buscador.css";

function Buscador() {
  const { categories, booksLoaded } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  function handleSelect(e) {
    if (e.target.value.length > 0) {
      setCategory(e.target.value);
    } else {
      setCategory("");
    }
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    if (title.length > 0) {
      dispatch(searchBooks(title, category));
      setActive(true);
    }
  }

  function changeSpaces(elem) {
    return elem.replace(/ /g, "%20");
  }

  return (
    <div className="Buscador-Body">
      <div className="Buscador-Container">
        <h2>SEARCHER</h2>
        <a>Category</a>
        <br />
        <select name="select" onChange={(e) => handleSelect(e)}>
          <option value="">Choice an option</option>
          {categories &&
            categories.length > 0 &&
            categories.map((elem) => (
              <option
                key={elem.list_name_encoded}
                value={elem.list_name_encoded}
              >
                {elem.list_name}
              </option>
            ))}
        </select>
        <div className={category !== "" ? "Buscador-Content" : "Content-No"}>
          <label>Book Title</label>
          <br />
          <input
            type="text"
            name="titleBook"
            placeholder="Enter book title or part of it"
            onChange={(e) => handleTitle(e)}
          />
          <button type="submit" name="search" onClick={(e) => handleSubmit(e)}>
            Search
          </button>
        </div>
        <div className={active ? "Buscador-Match" : "Match-No"}>
          <h3>
            {booksLoaded && booksLoaded.length === 0
              ? "No matches found"
              : booksLoaded.length === 1
              ? "1 match found"
              : booksLoaded.length + " matches found"}
          </h3>
        </div>
      </div>
      <div className="Buscador-Container">
        <ol>
          {booksLoaded &&
            booksLoaded.length > 0 &&
            booksLoaded.map((elem) => (
              <>
                <li>
                  <a
                    href={`https://www.google.com/search?q=${changeSpaces(
                      elem.book_details[0].title
                    )}+${elem.book_details[0].author}`}
                    target="_blank"
                  >
                    {elem.book_details[0].title}
                  </a>
                </li>
                <p>
                  <strong>Description:</strong>{" "}
                  {" " + elem.book_details[0].description}
                </p>
                <span>
                  <strong>Author:</strong> {" " + elem.book_details[0].author}
                </span>
                <br />
                <br />
              </>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Buscador;
