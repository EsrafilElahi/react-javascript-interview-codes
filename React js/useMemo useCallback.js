const memoizedCallback = useMemo(() => func, [prop]); // khode function ro ejra mikone
const memoizedCallback = useCallback(func, [prop]); // yek callback function barmigardoone vs az ijad mojaddad an prevent mikone vaghti mikhahim be component child prop konim estefade mikonim

const App = () => {
  const fooFunction = () => {
    return "Foo is just Food without D";
  };
  const useMemoResult = React.useMemo(fooFunction, []);
  const useCallbackResult = React.useCallback(fooFunction, []);

  console.log("useMemoResult: ", useMemoResult); // useMemoResult: Foo is just Food without D
  console.log("useCallbackResult: ", useCallbackResult); // // useCallbackResult: function fooFunction() {}

  return <p>Foo is just food without D</p>;
};
