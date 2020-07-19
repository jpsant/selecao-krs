import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../ultility";

const initialState = {
  movieList: [],
  error: false,
  loading: false, 
  success: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.REVIEVING_MOVIE_LIST:
      return updateObject(state, {error: false, loading: true, success: false})

    case actionTypes.REVIEVING_MOVIE_LIST_SUCCESS:
      return updateObject(state, {error: false, loading: false, success: false, movieList: action.movieList})

     case actionTypes.REVIEVING_MOVIE_LIST_FAIL:
      return updateObject(state, {error: true, loading: false, success: false})

    case actionTypes.ADDING_MOVIE:
      return updateObject(state, {error: false, loading: true, success: false});

    case actionTypes.ADDING_MOVIE_SUCCESS:
      return updateObject(state, {error: false, loading: false, success: true});

    case actionTypes.ADDING_MOVIE_FAIL:
      return updateObject(state, {error: true, loading: false, success: false});

    case actionTypes.UPDATING_MOVIE_LIST:
      return updateObject(state, {movieList: action.movieList})

    case actionTypes.EDITING_MOVIE:
      return updateObject(state, {error: false, loading: true, success: false});

    case actionTypes.EDITING_MOVIE_SUCCESS:
      return updateObject(state, {error: false, loading: false, success: true});

    case actionTypes.EDITING_MOVIE_FAIL:
      return updateObject(state, {error: true, loading: false, success: false});

    case actionTypes.REMOVING_MOVIE:
      return updateObject(state, {error: false, loading: true, success: false});

    case actionTypes.REMOVING_MOVIE_SUCCESS:
      return updateObject(state, {error: false, loading: false, success: true});

    case actionTypes.REMOVING_MOVIE_FAIL:
      return updateObject(state, {error: true, loading: false, success: false});

    case actionTypes.CLOSE_MESSAGE_MODAL:
      return updateObject(state, {error: false, loading: false, success: false})

    default:
      return state;
  }
};

export default reducer;