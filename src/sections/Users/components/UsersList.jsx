import { useState, useEffect } from "react";
import UsersListItem from "./UsersListItem";

function UserList() {
    const url = "https://boolean-uk-api-server.fly.dev/George-Alexander-S/contact"
    const [data, setData] = useState([]);

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
            <ul className="users-list">
                {data.map((user) => (
                    <UsersListItem key={user.id} user={user} />
                ))}
            </ul>
        </>
    )
}

export default UserList;