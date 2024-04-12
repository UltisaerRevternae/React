import React from "react";

const SECURITY_CODE = "asd";

const UseState = ({ name }) => {
  const [state, setState] = React.useState({
    error: false,
    loading: false,
    value: "",
    success: false,
    deleted: false,
  });

  const onConfirm = () => setState({ ...state, success: true, loading: false });
  const onError = () => setState({ ...state, error: true, loading: false });
  const onChange = () =>
  setState({
    ...state,
    loading: !state.loading,
    error: false,
    success: false,
  });
  const onDelete = () => setState({ ...state, deleted: true, success: false, value: "" });
  const onReset = () => setState({ ...state, deleted: false, success: false, value: "" });
  const onWrite = (newValue) => setState({ ...state, value: newValue });
  
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
      <div className=" grid place-content-center bg-slate-300 dark:bg-slate-800 p-6 gap-3 w-screen transition-colors">
        <div className="dark:text-slate-100 text-slate-800">
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
            onChange={(e) => onWrite(e.target.value)}
          />
          <button
            className="bg-slate-800 dark:bg-slate-300 dark:text-slate-800 rounded-r-lg py-1 px-4 text-slate-100"
            onClick={() => onChange()}
          >
            Check
          </button>
        </div>

        <div className="relative">
          {!state.loading && state.error && (
            <p className="font-medium absolute left-0 right-0 text-slate-800 dark:text-slate-300">
              The code is wrong
            </p>
          )}
        </div>
      </div>
    );
  }
  if (!!state.success && !state.deleted) {
    return (
      <div className=" grid place-content-center bg-slate-300 dark:bg-slate-800 p-6 gap-3 w-screen transition-colors">
        <div className="dark:text-slate-100 text-slate-800">
          <h2 className="text-xl font-medium ">Eliminate {name}</h2>
          <p className="font-light">You are sure that want delete UseState?</p>
        </div>

        <div className="flex justify-center gap-2">
          <button
            className="bg-slate-800 w-28 dark:bg-slate-300 dark:text-slate-800 rounded-lg py-1 px-4 text-slate-100"
            onClick={() => onDelete()}
          >
            Confirm
          </button>
          <button
            className="bg-slate-800 w-28 dark:bg-slate-300 dark:text-slate-800 rounded-lg py-1 px-4 text-slate-100"
            onClick={() => onReset()}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
  if (!state.success && !!state.deleted) {
    return (
      <div className=" grid place-content-center bg-slate-300 dark:bg-slate-800 p-6 gap-3 w-screen transition-colors">
        <div className="dark:text-slate-100 text-slate-800">
          <h2 className="text-xl font-medium ">{name} successfully removed</h2>
        </div>

        <div className="flex justify-center gap-2">
          <button
            className="bg-slate-800 w-40 dark:bg-slate-300 dark:text-slate-800 rounded-lg py-1 px-4 text-slate-100"
            onClick={() => onReset()}
          >
            Reset, go back
          </button>
        </div>
      </div>
    );
  }
};

export { UseState };
