import React from 'react';

function HeadingIcon(props){
    return (
        <div className="heading__icon">
            <a href="#"><i className={"fa " + props.fai}></i>{props.name}</a>
        </div>
    );
}

export default HeadingIcon;