import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import Design from './Design';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

const StyledTabs = withStyles({
    flexContainer: {
        justifyContent: 'flex-end',
        paddingLeft: '1em',
        paddingRight: '1em'
    },
    indicator: {
        backgroundColor: 'black !important'
    }
})(Tabs);

const StyledTab = styled(Tab)`
    text-transform: inherit !important;
    color: black !important; 
`;

class App extends Component {
    state = {
        value: 1,
        activePage: 'home'
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return(
            <div className="App">

                <div style={{position: 'absolute', top: '13px', left: '4em'}}>weboratory</div>



                <div style={{width: '400px', margin: '0 auto'}}>

                    <span className="item">Home</span>
                    <span className="item">Design</span>
                    <span className="item">Development</span>
                    <span className="item">Blog</span>

                </div>





                <AppBar position="static" style={{backgroundColor: '#f3f7f9', boxShadow: 'none'}}>
                    <StyledTabs value={value} onChange={this.handleChange}>
                        <StyledTab label="development" />
                        <StyledTab label="design" />
                        {/*<StyledTab label="marketing" />*/}
                    </StyledTabs>
                </AppBar>

                {value === 0 && <TabContainer>// in progress</TabContainer>}
                {value === 1 && <TabContainer>
                    <Design />
                </TabContainer>}
                {/*{value === 2 && <TabContainer>// in progress</TabContainer>}*/}


            </div>
        )
    }
}

export default App;