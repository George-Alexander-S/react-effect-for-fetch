import { useState, useEffect } from "react";

function AdviceSlip() {
    const url = "https://api.adviceslip.com/advice"
    const [data, setData] = useState([]);

    const advice = () => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData.slip);
        };
        fetchData();
    }
    useEffect(() => {
        advice();
    }, []);
// Making a function of what originally just was the useEffect.
// Function is triggered by button. Useeffect with emtpy argument array also triggers it upon render.
    return (
        <>
            <h3>Some Advice</h3>
            <p>{data.advice}</p>
            <button onClick={advice}>Get More Advice</button><button>Save to Favourites</button>
        </>
    )
}

export default AdviceSlip;