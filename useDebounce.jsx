import React, { useRef, useMemo, useLayoutEffect, useEffect } from 'react'


function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}


const useDebounce = (callback, delay) => {

  const callbackRef = useRef(callback)

  useLayoutEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return useMemo(() => debounce(((...args) => callbackRef.current(...args)), delay), [delay])

}

export default useDebounce

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



