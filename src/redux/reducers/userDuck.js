import { persistReducer } from "redux-persist";

export const types = {
  GET_ALL_USER: "GET_USER",
  USER_DETAILS_RESPONSE: "USER_DETAILS_RESPONSE",
  SEARCH_USER_RESPONSE: "SEARCH_USER_RESPONSE",
  GIT_RESPONSE: "GIT_RESPONSE",
  GIST_RESPONSE: "GIST_RESPONSE",
};

export const initialState = {
  userResponses: {
    getAllUsers: null,
    userDetails: null,
    searchUser: null,
    gitDetails: null,
    gistDetails: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_USER:
      return {
        ...state,
        userResponses: {
          ...state.userResponses,
          getAllUsers: action.payload,
        },
      };

    case types.USER_DETAILS_RESPONSE:
      return {
        ...state,
        userResponses: {
          ...state.userResponses,
          userDetails: action.payload,
        },
      };

    case types.SEARCH_USER_RESPONSE:
      return {
        ...state,
        userResponses: {
          ...state.userResponses,
          searchUser: action.payload,
        },
      };
    case types.GIT_RESPONSE:
      return {
        ...state,
        userResponses: {
          ...state.userResponses,
          gitDetails: action.payload,
        },
      };
    case types.GIST_RESPONSE:
      return {
        ...state,
        userResponses: {
          ...state.userResponses,
          gistDetails: action.payload,
        },
      };

    default:
      return state;
  }
};

export const actions = {
  getAllUser: () => (dispatch) => {
    fetch("https://api.github.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        dispatch(actions.saveAllUserDetails(responseData));
      })
      .catch((err) => {
        alert(err);
      });
  },

  getUserDetails: (name) => (dispatch) => {
    fetch(`https://api.github.com/users/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log("**************nresponseData", responseData);
        dispatch(actions.saveUserDetailsResponse(responseData));
      })
      .catch((err) => {
        alert(err);
      });
  },

  searchUser: (name) => (dispatch) => {
    fetch(`https://api.github.com/search/users?q=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        dispatch(actions.saveSearchUserResponse(responseData));
      })
      .catch((err) => {
        alert(err);
      });
  },

  getGit: (name) => (dispatch) => {
    fetch(`https://api.github.com/users/${name}/repos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        dispatch(actions.saveGitResponse(responseData));
      })
      .catch((err) => {
        alert(err);
      });
  },

  getGist: (name) => (dispatch) => {
    fetch(`https://api.github.com/users/${name}/gists?1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        dispatch(actions.saveGistResponse(responseData));
      })
      .catch((err) => {
        alert(err);
      });
  },

  saveAllUserDetails: (payload) => ({
    type: types.GET_ALL_USER,
    payload: payload,
  }),

  saveUserDetailsResponse: (payload) => ({
    type: types.USER_DETAILS_RESPONSE,
    payload: payload,
  }),

  saveSearchUserResponse: (payload) => ({
    type: types.SEARCH_USER_RESPONSE,
    payload: payload,
  }),

  saveGitResponse: (payload) => ({
    type: types.GIT_RESPONSE,
    payload: payload,
  }),

  saveGistResponse: (payload) => ({
    type: types.GIST_RESPONSE,
    payload: payload,
  }),
};
