import React from 'react';
import HeadingUserIcon from './headingusericon';

function HeadingUserArea(props) {
    return (
        <div className="heading__userarea">
            <HeadingUserIcon imgURL={props.imgURL}/>
            <span className="heading__username">{props.name} <a href="#"><i className="fa fa-arrow-down"></i></a></span>
        </div>
    );
}
export default HeadingUserArea;