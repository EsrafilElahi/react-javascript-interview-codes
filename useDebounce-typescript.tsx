import React, { useRef, useMemo, useLayoutEffect, useEffect } from "react";

// T === fn
type AnyCallbackFunc = (...args: any[]) => any;
type DebounceFunction = <F extends AnyCallbackFunc>(fn: F, delay: number) => (...args: Parameters<F>) => void;

const debounce: DebounceFunction = (fn, delay) => {
 let timer: ReturnType<typeof setTimeout>;

 return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
 };
};

const useDebounce = (callback: AnyCallbackFunc, delay: number): AnyCallbackFunc => {
 const callbackRef = useRef(callback);

 useLayoutEffect(() => {
    callbackRef.current = callback;
 }, [callback]);

 return useMemo(() => debounce((...args) => callbackRef.current(...args), delay), [delay]);
};

export default useDebounce;

// const cachedGetDataFunction = useCallback(async () => {
//     try {
//         await dispatch(loadItems({id: "esrafil"})).unwrap();
//       }
//     } catch (error) {
//       console.log(error);
//       console.log("err in fetch data");
//     }
//   }, [dependencies_needed])

// const getDouncedFunction = useDebounce(cachedGetDataFunction, 600);
