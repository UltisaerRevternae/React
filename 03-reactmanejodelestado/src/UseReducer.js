import React from "react";

const SECURITY_CODE = "asd";
const initialState = {
  error: false,
  loading: false,
  value: "",
  success: false,
  deleted: false,
};

const actionTypes = {
  CONFIRM: "CONFIRM",
  ERROR: "ERROR",
  CHANGE: "CHANGE",
  DELETE: "DELETE",
  RESET: "RESET",
  WRITE: "WRITE",
};

const UseReducer = ({ name }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onConfirm = () => dispatch({ type: actionTypes.CONFIRM });
  const onError = () => dispatch({ type: actionTypes.ERROR });
  const onChange = () => dispatch({ type: actionTypes.CHANGE });
  const onDelete = () => dispatch({ type: actionTypes.DELETE });
  const onReset = () => dispatch({ type: actionTypes.RESET });
  
  const onWrite = (e) =>
    dispatch({
      type: actionTypes.WRITE,
      payload: { value: e.target.value },
    });

  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 2000);
    }
  }, [state.loading, state.value]);

  if (!state.deleted && !state.success) {
    return (
      <div className=" grid place-content-center bg-slate-800 dark:bg-slate-300 p-6 gap-3 w-screen transition-colors">
        <div className="dark:text-slate-800 text-slate-100">
          <h2 className="text-xl font-medium ">Eliminate {name}</h2>
          {!state.loading && (
            <p className="font-light">Please write the security code</p>
          )}
          {state.loading && <p className="font-light">Loading...</p>}
        </div>

        <div className="flex justify-center">
          <input
            placeholder="Security Code"
            className="bg-slate-100 w-56 rounded-l-lg py-1 px-4 focus:outline-none"
            value={state.value}
            onChange={onWrite}
          />
          <button
            className="bg-slate-300 dark:bg-slate-800 dark:text-slate-100 rounded-r-lg py-1 px-4 text-slate-800"
            onClick={onChange}
          >
            Check
          </button>
        </div>

        <div className="relative">
          {!state.loading && state.error && (
            <p className="font-medium absolute left-0 right-0 text-slate-300 dark:text-slate-800">
              The code is wrong
            </p>
          )}
        </div>
      </div>
    );
  }
  if (!!state.success && !state.deleted) {
    return (
      <div className=" grid place-content-center bg-slate-800 dark:bg-slate-300 p-6 gap-3 w-screen transition-colors">
        <div className="dark:text-slate-800 text-slate-100">
          <h2 className="text-xl font-medium ">Eliminate {name}</h2>
          <p className="font-light">You are sure that want delete UseState?</p>
        </div>

        <div className="flex justify-center gap-2">
          <button
            className="bg-slate-300 w-28 dark:bg-slate-800 dark:text-slate-100 rounded-lg py-1 px-4 text-slate-800"
            onClick={onDelete}
          >
            Confirm
          </button>
          <button
            className="bg-slate-300 w-28 dark:bg-slate-800 dark:text-slate-100 rounded-lg py-1 px-4 text-slate-800"
            onClick={onReset}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
  if (!state.success && !!state.deleted) {
    return (
      <div className=" grid place-content-center bg-slate-800 dark:bg-slate-300 p-6 gap-3 w-screen transition-colors">
        <div className="dark:text-slate-800 text-slate-100">
          <h2 className="text-xl font-medium ">{name} successfully removed</h2>
        </div>

        <div className="flex justify-center gap-2">
          <button
            className="bg-slate-300 w-40 dark:bg-slate-800 dark:text-slate-100 rounded-lg py-1 px-4 text-slate-800"
            onClick={onReset}
          >
            Reset, go back
          </button>
        </div>
      </div>
    );
  }
};

const reducerObj = ({ state, value = "" }) => ({
  [actionTypes.CONFIRM]: { ...state, success: true, loading: false },
  [actionTypes.ERROR]: { ...state, error: true, loading: false },
  [actionTypes.CHANGE]: {
    ...state,
    loading: !state.loading,
    error: false,
    success: false,
  },
  [actionTypes.DELETE]: { ...state, deleted: true, success: false, value: "" },
  [actionTypes.RESET]: { ...state, deleted: false, success: false, value: "" },
  [actionTypes.WRITE]: { ...state, value: value },
});

const reducer = (state, action) => {
  if (reducerObj({ state })[action.type]) {
    return reducerObj({ state, value: action.payload?.value })[action.type];
  } else {
    return state;
  }
};

export { UseReducer };

// const reducerV1 = (state, action) => {
//   if (action.type === "ERROR") {
//     return { ...state, error: true, loading: false };
//   } else {
//     return { ...state };
//   }
// };

// const reducerV2 = (state, action) => {
//   switch (action.type) {
//     case "ERROR":
//       return { ...state, error: true, loading: false };
//     case "CONFIRM":
//       return { ...state, success: true, loading: false };
//     default:
//       return { ...state };
//   }
// };
