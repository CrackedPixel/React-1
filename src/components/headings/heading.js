import React from 'react';
import HeadingIcon from './headingicon';
import HeadingUserArea from './headinguserarea';

class Heading extends React.Component {
    constructor(){
        super();
        this.state = {
            nURL: "",
            nName: ""
        }
    }
    componentDidMount(){
        // https://randomuser.me/api/?nat=gb,us,au
        fetch('https://randomuser.me/api/?nat=gb,us,au')
            .then(response => response.json())
            .then(json => {
                    this.setState({nURL: json.results[0].picture.medium, nName: json.results[0].name.first + " " + json.results[0].name.last[0] + "."});
                }
            )
    }

    render() {
        return (
        <header>
            <HeadingIcon fai="fa-tachometer" name="Dashboard" />
            <HeadingIcon fai="fa-desktop" name="Websites" />
            <HeadingIcon fai="fa-pencil" name="Templates" />
            <HeadingIcon fai="fa-question" name="Help" />
            <HeadingUserArea name={this.state.nName} imgURL={this.state.nURL} />
        </header>
        );
    }
}

export default Heading;