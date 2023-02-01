import { ACTIONS } from "./App";

export default function DeleteDigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.DELETE_DIGIT, payload: { digit } })
      }
    >
      {" "}
      DEL
      {digit}
    </button>
  );
}
