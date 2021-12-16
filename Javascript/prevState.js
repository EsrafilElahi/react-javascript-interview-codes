
const [num, setNum] = useState(0)

const handleClick = () => {
    setNum(num + 1)
    setNum(num + 1)    // faghat 1 doone ezaf mishe
    setNum(num + 1)
}

const handleClick = () => {
    setNum(prevState => prevState + 1)
    setNum(prevState => prevState + 1)    // intori 3ta 3ta ezaf mishe
    setNum(prevState => prevState + 1)
}

// har mooghe be meghdar ghabli state niaz dashtim az prevState estefade mikonim