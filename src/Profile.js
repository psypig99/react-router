import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
    velopert: {
        name: 'minjun Kim',
        description: 'programmer'
    },
    gildong: {
        name: 'gildong hong',
        description: 'hero'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if (!profile) {
        return <div> 존재하지 않는 사용자 입니다. </div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    )
}

export default Profile;