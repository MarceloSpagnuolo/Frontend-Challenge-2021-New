const initialState = {
  categories: [],
  booksLoaded: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === "GET_CATEGORIES") {
    return {
      ...state,
      categories: action.payload.results.slice(0, 10),
    };
  }
  if (action.type === "SEARCH_BOOKS") {
    return {
      ...state,
      booksLoaded: action.payload,
    };
  }
  return state;
}

export default rootReducer;
