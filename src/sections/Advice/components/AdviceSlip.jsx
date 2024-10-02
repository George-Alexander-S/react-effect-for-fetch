import { useState, useEffect } from "react";
import FavouriteSlipsList from "./FavouriteSlipsList";

function AdviceSlip() {
    const url = "https://api.adviceslip.com/advice"
    const [data, setData] = useState([]);

    const [saved, setSaved] = useState([]);

    // Learned the .some method today. At least I can't remember hearing about it before today. Was going loopy figuring out why the below didnt work with .includes...
    // It would work. If i make a map of the id's though!

    const saveAlternateVersion = () => {
        const newAdvice = {...data}
        const mappedIds = saved.map((advice) => advice.id);

        if (!mappedIds.includes(newAdvice.id)) {
            setSaved((prevSaved) => [...prevSaved, newAdvice]);
            console.log(newAdvice);
        }
    }

    const save = () => {
        const newAdvice = {...data }
        if (!saved.some((advice) => advice.id === newAdvice.id)) {
            setSaved((prevSaved) => [...prevSaved, newAdvice])
            console.log(newAdvice)
        }
    }

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
            <button onClick={advice}>Get More Advice</button><button onClick={save}>Save to Favourites</button><button onClick={saveAlternateVersion}>Save to Favourites Alternate version</button>
            <ul>
                {saved.map((advices) => (
                    <FavouriteSlipsList key={advices.id} advices={advices} />
                ))}
            </ul>
        </>
    )
}

export default AdviceSlip;