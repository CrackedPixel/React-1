import React from 'react';
import PageFormInput from './pageform__input';

const CountryListURL = "https://restcountries.eu/rest/v2/all";

class PageForm extends React.Component {
    constructor(){
        super();
        this.state = {
            countryList: []
        }
    }

    componentDidMount(){
        fetch(CountryListURL)
            .then(response => response.json())
            .then(json => this.setState({countryList: json}));
    }

    render() {
        let nList = this.state.countryList.map(nItem => (
            <option key={nItem.alpha2Code}>{nItem.name}</option>
        ));
        return (
            <div className="pageForm">
                <div className="pageForm__box pageForm__left">
                    <PageFormInput pname="Team Name"/>
                    <PageFormInput pname="Company Name"/>
                    <PageFormInput pname="Password" ptype="password"/>
                </div>
                <div className="pageForm__center">
                    
                </div>
                <div className="pageForm__box pageForm__right">
                <PageFormInput pname="Primary Email" ptype="email"/>
                <label>
                    <span>Country</span>
                    <br />
                    <select className="pageForm__input">
                        {nList}
                    </select>
                </label>
                <PageFormInput pname="Repeat Password" ptype="password"/>
                </div>
            </div>
        );
    };
}

export default PageForm;