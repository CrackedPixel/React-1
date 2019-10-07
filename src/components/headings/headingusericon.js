import React from 'react';

function HeadingUserIcon(props) {
    return (
        <div>
            <img className="heading__userprofilepic" src={props.imgURL} alt="user profile"></img>
        </div>
    );
}

export default HeadingUserIcon;