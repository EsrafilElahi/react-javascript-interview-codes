export function debounce(func, timeout = 600) {
  let timer;
  const debounced = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
  debounced.cancel = () => {
    clearTimeout(timer);
  };
  return debounced;
}

// usage

const useSearchHook = (value) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const debouncedSetValue = useMemo(() => debounce(setDebouncedValue, 500), []);

  useEffect(() => {
    debouncedSetValue(body);
    return () => {
      debouncedSetValue.cancel();
    };
  }, [value]);

  const { data, isLoading } = useQuery(
    [searchApiFunction, value],
    () => searchApiFunction(value),
    { retry: false }
  );

  return { data, isLoading };
};


  const { data, isLoading } = useSearchHook("text input value");
