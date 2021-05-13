export const getCategories = () => async (dispatch) => {
  return await fetch(
    "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j"
  )
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: "GET_CATEGORIES", payload: json });
    });
};

export const searchBooks = (title, category) => async (dispatch) => {
  return await fetch(
    `https://api.nytimes.com/svc/books/v3/lists.json?list=${category}&api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j`
  )
    .then((response) => response.json())
    .then((json) => {
      const search = json.results.filter(
        (elem) =>
          elem.book_details[0].title
            .toUpperCase()
            .indexOf(title.toUpperCase()) >= 0
      );
      dispatch({ type: "SEARCH_BOOKS", payload: search });
    });
};

/* export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`/users/?order=["familyname"]`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: "Problemas al traer los usuarios",
    });
  }
}; */
