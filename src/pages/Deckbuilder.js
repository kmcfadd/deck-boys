import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Searchbar from '../components/Searchbar/Searchbar';
import Results from '../components/Results/Results';
import Sidebar from '../components/Sidebar/Sidebar';

class Deckbuilder extends Component {

    render() {
        return (
            <Wrapper>
                <Searchbar />
                <Results>
                    lott stuff
                </Results>
                <Sidebar>
                    ugh
                </Sidebar>
            </Wrapper>
    )
}
    
}

export default Deckbuilder;