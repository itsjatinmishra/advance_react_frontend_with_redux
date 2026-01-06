import { useReducer } from "react";

const userReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "updateProfile":
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    default:
      return state;
  }
};

const initialUserState = {
  isAuthenticated: false,
  user: null,
};

const ReducerHook2 = () => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const login = () => {
    dispatch({
      type: "login",
      payload: { name: "John Deo", email: "john@example.com" },
    });
  };
  const logout = () => {
    dispatch({ type: "logout" });
  };
  const updateProfile = () => {
    dispatch({ type: "updateProfile", payload: { name: "John Smith" } });
  };

  return (
    <>
      <div>
        <h1>User Authentication</h1>
        {state.isAuthenticated ? (
          <div>
            <h2>Welcome: {state.user.name}</h2>
            <p>Email: {state.user.email}</p>
            <button onClick={updateProfile}>Update Profile</button>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </>
  );
};
export default ReducerHook2;
