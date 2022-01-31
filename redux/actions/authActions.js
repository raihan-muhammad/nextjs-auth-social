import { signInWithPopup } from "firebase/auth";
import { authentication } from "./../../config/firebaseConfig";
export const signIn = (provider) => {
  return async (dispatch) => {
    const result = await signInWithPopup(authentication, provider);
    dispatch({ type: "SET_DATA", payload: result });
  };
};
