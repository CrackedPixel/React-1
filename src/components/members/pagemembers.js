import React from 'react';
import PageMemberUser from './pagemembers__user';

class PageMembers extends React.Component {
    constructor(){
        super();
        this.state = {
            memCount: 0,
            allPeopleInfo: {},
            loadedPeople: false,
            allCountryInfo: {},
            memberInfo: {},
            userHolder: []
        }

        this.memberAddNew = this.memberAddNew.bind(this);
        this.memberRemoveAt = this.memberRemoveAt.bind(this);
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?nat=gb,us,au&results=100')
            .then(response => response.json())
            .then(json => this.setState({
                allPeopleInfo: json.results,
                loadedPeople: true
            }));
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json => this.setState({
                allCountryInfo: json
            }));
    }
    
    memberAddNew(){
        if (this.state.memCount < 10){
            this.setState(prevState => ({
                memCount: prevState.memCount+1
            }));
        }
    }

    memberRemoveAt(event){
        // console.log(event.currentTarget.value);
        if (this.state.memCount > 0){
            this.setState(prevState => ({
                memCount: prevState.memCount-1
            }))
        }
    }

    render(){
        const memberCountStr = (this.state.memCount > 0) ? this.state.memCount : "0";
        let allUsers = [];
        if (this.state.loadedPeople){
            for(let i = 0; i < this.state.memCount; ++i){
                let rCountry = Math.floor(Math.random() * this.state.allCountryInfo.length);
                if (rCountry >= 0){
                    let rPerson = Math.floor(Math.random() * 100);
                    if (rPerson >= 0){
                        allUsers.push(<PageMemberUser 
                            key={i} 
                            btnKey={i}
                            name={this.state.allPeopleInfo[rPerson].name.first + " " + this.state.allPeopleInfo[rPerson].name.last} 
                            imgURL={this.state.allPeopleInfo[rPerson].picture.thumbnail}
                            countryFlag={this.state.allCountryInfo[rCountry].flag}
                            countryName={this.state.allCountryInfo[rCountry].name}
                            removeBtn={this.memberRemoveAt}
                        />);
                    }
                }
            }
        }
        return (
            <div className="pageMembers">
                <div className="pageMembers__top">
                    <h2>Members <span className="pageMembers__count">{memberCountStr}</span></h2>
                    <button onClick={this.memberAddNew}><i className="fa fa-plus"></i> <span>Add</span></button>
                </div>
                <div className="pageMembers__middle">
                    {allUsers}
                </div>
                <div className="pageMembers__bottom">
                    <button><span>Save</span></button>
                </div>
            </div>
        );
    };
}

export default PageMembers;