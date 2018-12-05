import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import posed from 'react-pose';

import Design from './Design';
import Dev from './Dev';

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

const navArr = ['Design', 'Development', 'About', 'Blog', 'Contact'];


const Box = posed.div({
    active: {
        // position: 'absolute',
        scale: 2,
        y: 10,
        fontWeight: 700,
        transition: { duration: 300, ease: 'easeOut', },
        transform: 'translateX(50%)'
    },
    inactive: {
        scale: 1,
        fontWeight: 300,
        y: 0,
        // x: ({ i }) => {
        //     return(i * 100)
        // },
        transition: { duration: 300, ease: 'easeOut', }
    }
});


class App extends Component {
    state = {
        activePage: 'Design'
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleClick = item => e => {
        this.setState({ activePage: item });
    }


    render() {
        const { activePage } = this.state;

        let order = [0,1,2];

        return(
            <div className="App">

                <div className="navigation">
                    <div className="logo" style={{fontWeight: 800}}>weboratory</div>



                    <div style={{height: '80px', marginRight: '4em'}}>
                        {navArr.map((page, index) => {

                            let active = (activePage === page) ? true : false;

                            let i = !active ? order.shift() : null;

                            return(
                                <Box onClick={this.handleClick(page)}
                                     i={i}
                                     className="item"
                                     key={`${page}${index}`}
                                     pose={active ? 'active' : 'inactive'}>{page}</Box>

                            )
                        })}
                    </div>
                </div>





                {/*<AppBar position="static" style={{backgroundColor: '#f3f7f9', boxShadow: 'none'}}>*/}
                    {/*<StyledTabs value={value} onChange={this.handleChange}>*/}
                        {/*<StyledTab label="development" />*/}
                        {/*<StyledTab label="design" />*/}
                        {/*/!*<StyledTab label="marketing" />*!/*/}
                    {/*</StyledTabs>*/}
                {/*</AppBar>*/}

                {activePage === 'Development' && <TabContainer>
                    <Dev />
                </TabContainer>}
                {activePage === 'Design' && <TabContainer>
                    <Design />
                </TabContainer>}
                {activePage === 'About' && <TabContainer>
                    <p>// Coming soon</p>
                </TabContainer>}
                {activePage === 'Blog' && <TabContainer>
                    <p>// Coming soon</p>
                </TabContainer>}
                {activePage === 'Contact' && <TabContainer>
                    <p>// Coming soon</p>
                </TabContainer>}
                {/*{value === 2 && <TabContainer>// in progress</TabContainer>}*/}


            </div>
        )
    }
}

export default App;