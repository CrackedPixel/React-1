import React from 'react';
import Navigation from '../nav/navigation';
import PageTitle from './pagetitle';
import PageForm from './pageform';
import PageMembers from '../members/pagemembers';

function MainPage() {
    return (
        <div className="mainPage">
            <Navigation />
            <PageTitle pageicon="fa fa-user-o pageIcon" pagename="New Team"/>
            <PageForm />
            <PageMembers />
        </div>
    );
}

export default MainPage;