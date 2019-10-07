import React from 'react';

function PageMemberUser(props){
    return (
        <div className="pageMember__user">
            <div className="user__info">
                <img src={props.imgURL} alt="profile"></img>    
                <span>{props.name}</span>
            </div>
            <div className="user__country">
                <img src={props.countryFlag} alt="flag"></img>
                <span>{props.countryName}</span>
            </div>
            <div className="user__buttons">
                <button value={props.btnKey} onClick={props.removeBtn}><i className="fa fa-minus-circle font__red"></i> <span>Remove</span></button>
            </div>
        </div>
    );
}

export default PageMemberUser;