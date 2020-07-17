import * as actionTypes from './actionTypes';

export const addMovie = () => {
  return {
    type: actionTypes.ADDING_MOVIE,
  }
}

export const addMovieSuccess = () => {
  return {
    type: actionTypes.ADDING_MOVIE_SUCCESS,
  }
}

export const addMovieFail = () => {
  return {
    type: actionTypes.ADDING_MOVIE_FAIL,
  }
}


export const editMovie = () => {
  return {
    type: actionTypes.EDITING_MOVIE,
  }
}

export const editMovieSuccess = () => {
  return {
    type: actionTypes.EDITING_MOVIE_SUCCESS,
  }
}

export const editMovieFail = () => {
  return {
    type: actionTypes.EDITING_MOVIE_FAIL,
  }
}


export const removeMovie = () => {
  return {
    type: actionTypes.REMOVING_MOVIE,
  }
}

export const removeMovieSuccess = () => {
  return {
    type: actionTypes.REMOVING_MOVIE_SUCCESS,
  }
}

export const removeMovieFail = () => {
  return {
    type: actionTypes.REMOVING_MOVIE_FAIL,
  }
}