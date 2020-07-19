import * as actionTypes from "./actionTypes";
import axios from "axios";

export const retrieveMovieList = () => {
  return {
    type: actionTypes.REVIEVING_MOVIE_LIST,
  };
};

export const retrieveMovieListSuccess = (movieList) => {
  return {
    type: actionTypes.REVIEVING_MOVIE_LIST_SUCCESS,
    movieList: movieList,
  };
};

export const retrieveMovieListFail = () => {
  return {
    type: actionTypes.REVIEVING_MOVIE_LIST_FAIL,
  };
};

export const updateMovieList = (list) => {
  return {
    type: actionTypes.UPDATING_MOVIE_LIST,
    movieList: list,
  };
};

export const addMovie = () => {
  return {
    type: actionTypes.ADDING_MOVIE,
  };
};

export const addMovieSuccess = () => {
  return {
    type: actionTypes.ADDING_MOVIE_SUCCESS,
  };
};

export const addMovieFail = () => {
  return {
    type: actionTypes.ADDING_MOVIE_FAIL,
  };
};

export const editMovie = () => {
  return {
    type: actionTypes.EDITING_MOVIE,
  };
};

export const editMovieSuccess = () => {
  return {
    type: actionTypes.EDITING_MOVIE_SUCCESS,
  };
};

export const editMovieFail = () => {
  return {
    type: actionTypes.EDITING_MOVIE_FAIL,
  };
};

export const removeMovie = () => {
  return {
    type: actionTypes.REMOVING_MOVIE,
  };
};

export const removeMovieSuccess = () => {
  return {
    type: actionTypes.REMOVING_MOVIE_SUCCESS,
  };
};

export const removeMovieFail = () => {
  return {
    type: actionTypes.REMOVING_MOVIE_FAIL,
  };
};

export const closeModalMessage = () => {
  return {
    type: actionTypes.CLOSE_MESSAGE_MODAL,
  };
};

export const initEditingMovie = (list, item) => {
  return (dispatch) => {
    dispatch(editMovie());
    axios
      .put(`http://localhost:3000/movies/${item.id}`, item)
      .then(() => {
        dispatch(editMovieSuccess());
        dispatch(updateMovieList(list));
      })
      .catch(() => dispatch(editMovieFail()));
  };
};

export const initRetrievingMovieList = () => {
  return (dispatch) => {
    dispatch(retrieveMovieList());
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        dispatch(retrieveMovieListSuccess(response.data));
      })
      .catch(() => dispatch(retrieveMovieListFail()));
  };
};

export const initAddingMovie = (list, item) => {
  return (dispatch) => {
    dispatch(addMovie());
    axios
      .post("http://localhost:3000/movies/", item)
      .then(() => {
        dispatch(addMovieSuccess());
        dispatch(updateMovieList(list));
      })
      .catch(() => dispatch(addMovieFail()));
  };
};

export const initRemovingMovie = (list, id) => {
  return (dispatch) => {
    dispatch(removeMovie());
    axios
      .delete(`http://localhost:3000/movies/${id}`)
      .then(() => {
        dispatch(removeMovieSuccess());
        dispatch(updateMovieList(list));
      })
      .catch(() => dispatch(removeMovieFail()));
  };
};
