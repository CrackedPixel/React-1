import React from 'react';

function PageFormInput(props) {
    const pName = props.pname;
    const nType = props.ptype ? props.ptype : "text";
    return (
        <label>
            <span>{pName}</span><br />
            <input className="pageForm__input" type={nType}>
            </input>
        </label>
    );
}

export default PageFormInput;