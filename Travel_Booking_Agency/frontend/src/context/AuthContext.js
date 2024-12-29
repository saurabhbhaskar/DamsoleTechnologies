import { createContext, useEffect, useReducer } from "react";

const initial_state = {
   user: (() => {
      try {
         return localStorage.getItem("user") 
             ? JSON.parse(localStorage.getItem("user")) 
             : null;
      } catch (error) {
         console.error("Invalid user data in localStorage:", error);
         return null;
      }
   })(),
   loading: false,
   error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
   switch (action.type) {
      case "LOGIN_START":
         return { user: null, loading: true, error: null };
      case "LOGIN_SUCCESS":
         return { user: action.payload, loading: false, error: null };
      case "LOGIN_FAILURE":
         return { user: null, loading: false, error: action.payload };
      case "REGISTER_SUCCESS":
      case "LOGOUT":
         return { user: null, loading: false, error: null };
      default:
         return state;
   }
};

export const AuthContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AuthReducer, initial_state);

   useEffect(() => {
      try {
         if (state.user) {
            localStorage.setItem("user", JSON.stringify(state.user));
         } else {
            localStorage.removeItem("user");
         }
      } catch (error) {
         console.error("Error updating localStorage:", error);
      }
   }, [state.user]);

   return (
      <AuthContext.Provider
         value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
