import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const initialList = []

const Users = (props) => {
    
    const [userList, setUserList ] = useState(initialList);
    const [loading, setLoading ] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3333/api/user').then((response) => {
            response.json().then((jsonResponse) => {
                setUserList(jsonResponse.data);
            })
        })
    }, [userList]);


    const getApi = (id) => {
        setLoading(true);
        fetch(`http://localhost:3333/api/user/${id}`).then((response) => {
            response.json().then((jsonResponse) => {
                setLoading(false);
                props.history.push(`/users/${jsonResponse.data.id}`);
            })
        })
    }

    return (
        <div className="view-users">
            User<br />
            <ul>
                {loading ? 'Cargando' : ''}
            {userList.map((user) => (
                <li key={user.id}>{user.name}
                <Link to={`/users/${user.id}`}>Detalle</Link>
                <div onClick={() => getApi(user.id)} role="button">click</div>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default withRouter(Users);