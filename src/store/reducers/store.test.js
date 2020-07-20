import reducer from "./store";
import * as actionTypes from "../actions/actionTypes";

describe("Store reducer tests", () => {
  it("should return the initialState", () => {
    expect(reducer(undefined, {})).toEqual({
      movieList: [],
      error: false,
      loading: false,
      success: false,
    });
  });

  it("Should display a LoadingSpinner when the RetrieveMovieList request is in progress", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.REVIEVING_MOVIE_LIST,
        }
      )
    ).toEqual({
      movieList: [],
      error: false,
      loading: true,
      success: false,
    });
  });

  it("Should return the MovieList when the request is successful", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.REVIEVING_MOVIE_LIST_SUCCESS,
          movieList: ["movie1", "movie2"]
        }
      )
    ).toEqual({
      movieList: ["movie1", "movie2"],
      error: false,
      loading: false,
      success: false,
    });
  });

  it("Should return a Error when the RetrieveMovieList fails", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.REVIEVING_MOVIE_LIST_FAIL,
        }
      )
    ).toEqual({
      movieList: [],
      error: true,
      loading: false,
      success: false,
    });
  });

  it("Should update the movieList when UPDATING_MOVIE_LIST is called", () => {
    expect(
      reducer(
        {
          movieList: ['item1', 'item2'],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.UPDATING_MOVIE_LIST,
          movieList: ['item1', 'item2', 'item3']
        }
      )
    ).toEqual({
      movieList: ['item1', 'item2', 'item3'],
      error: false,
      loading: false,
      success: false,
    });
  });

  it("Should display a LoadingSpinner when the AddMovie request is in progress", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.ADDING_MOVIE,
        }
      )
    ).toEqual({
      movieList: [],
      error: false,
      loading: true,
      success: false,
    });
  });

  it("Should return Success when the AddMovie request Succeeds", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.ADDING_MOVIE_SUCCESS,
        }
      )
    ).toEqual({
      movieList: [],
      error: false,
      loading: false,
      success: true,
    });
  });

  it("Should return a Error when the AddMovie request fails", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.ADDING_MOVIE_FAIL,
        }
      )
    ).toEqual({
      movieList: [],
      error: true,
      loading: false,
      success: false,
    });
  });

  it("Should display a LoadingSpinner when the EditingMovie request is in progress", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.EDITING_MOVIE,
        }
      )
    ).toEqual({
      movieList: [],
      error: false,
      loading: true,
      success: false,
    });
  });

  it("Should return Success when the EditingMovie request Succeeds", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.EDITING_MOVIE_SUCCESS,
        }
      )
    ).toEqual({
      movieList: [],
      error: false,
      loading: false,
      success: true,
    });
  });

  it("Should return a Error when the EditingMovie request fails", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.EDITING_MOVIE_FAIL,
        }
      )
    ).toEqual({
      movieList: [],
      error: true,
      loading: false,
      success: false,
    });
  });

  it("Should display a LoadingSpinner when the RemoveMovie request is in progress", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.REMOVING_MOVIE,
        }
      )
    ).toEqual({
      movieList: [],
      error: false,
      loading: true,
      success: false,
    });
  });

  it("Should return Success when the RemoveMovie request Succeeds", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.REMOVING_MOVIE_SUCCESS,
        }
      )
    ).toEqual({
      movieList: [],
      error: false,
      loading: false,
      success: true,
    });
  });

  it("Should return a Error when the RemoveMovie request fails", () => {
    expect(
      reducer(
        {
          movieList: [],
          error: false,
          loading: false,
          success: false,
        },
        {
          type: actionTypes.REMOVING_MOVIE_FAIL,
        }
      )
    ).toEqual({
      movieList: [],
      error: true,
      loading: false,
      success: false,
    });
  });

});
