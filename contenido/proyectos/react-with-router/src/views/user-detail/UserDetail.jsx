import React, { Suspense, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
const LazyComponent = React.lazy(() => import('../../component/title-lazy/TitleLazy'));

const UserDetail = (props) => {
    const { id } = props.match.params;
    const [ user, setUser ] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3333/api/user/${id}`).then((response) => {
            response.json().then((jsonResponse) => {
                setUser(jsonResponse.data);
            })
        })
    }, []);

    return (
        <div className="view-user-detail">
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent>User detail</LazyComponent>
            </Suspense>
            {user && (<div>
                    <strong>{user.name}</strong>
                    <br />
                    <strong>{user.email}</strong>
                </div>)}
        </div>
    );
}

export default withRouter(UserDetail);