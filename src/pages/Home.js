import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Content from '../components/Content/Content';
import Sidebar from '../components/Sidebar/Sidebar';

class Home extends Component {

    render() {
        return (
            <Wrapper>
                <Content>
                    <p>this is content piece one</p>
                </Content>
                <Content>
                    <p>this is content piece two</p>
                </Content>
                <Sidebar>
                    <h3>Welcome to Deck Boys</h3>
                    <h4>A one stop shop for all your Standard MTG deckbuilding needs</h4>
                    <br />
                    <h5>Browse creations at your leisure or register to start creating!</h5>
                </Sidebar>
            </Wrapper>
    )
}
    
}

export default Home;