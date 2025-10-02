import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        const url = `https://v6.exchangerate-api.com/v6/ff7f40c44ff6bb383af60905/latest/${currency}`
        fetch(url).then(res => res.json()).then((res) => setData(res["conversion_rates"]))
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo