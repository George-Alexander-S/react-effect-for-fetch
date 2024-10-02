import { useState, useEffect } from "react";
import ArtListItem from "./ArtListItem";

function ArtList() {
    const url = "https://boolean-uk-api-server.fly.dev/art";
    const [data, setData] = useState([]);
    const imageBaseUrl = "https://boolean-uk-api-server.fly.dev";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    return (
        <>
            <ul className="art-list">
                {data.map((artWork) => (
                    <ArtListItem key={artWork.id} artWork={artWork} url={imageBaseUrl}/> //Making a new element of ArtListItem for each artWork. Key is the id from each artwork in the url. And passing the object to that key itself, as a prop. To be used in the child component.
                ))}
            </ul>
        </>
    )
}

export default ArtList;