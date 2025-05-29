import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    //call the api when app loads -> better optimisation
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) //looks json but mostly api gives data in string format
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

        
    } , [currency])

    console.table(data)
    return data
}

//returning full method
export default useCurrencyInfo