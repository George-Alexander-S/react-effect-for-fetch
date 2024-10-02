import { useState, useEffect } from "react";

function AdviceSlip() {
    const url = "https://api.adviceslip.com/advice"
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData.slip);
        };
        fetchData();
    }, []);

    return (
        <>
            <h3>Some Advice</h3>
            <p>{data.advice}</p>
        </>
    )
}

export default AdviceSlip;