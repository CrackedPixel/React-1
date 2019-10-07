import React from 'react';

function PageTitle(props){
    return (
        <div className="pageTitle">
            <i className={props.pageicon}></i>
            <span className="pageTitle__title">{props.pagename}</span>
        </div>
    );
}

export default PageTitle;