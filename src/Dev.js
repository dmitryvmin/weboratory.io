import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
       // minWidth: 275,
        marginBottom: '1em'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class Dev extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        const { classes } = this.props;

        return(

        <div>

            {/*<h1>Development</h1>*/}

            {/*<h3 style={{textAlign: 'left', margin: '1em 0'}}>Recent Projects</h3>*/}

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Josh Yaro
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <a href="http://joshyaro.com/#/home" target="_blank">visit site</a>
                    </Typography>
                    <Typography component="p">
                        Designed and built a personal website for a professional soccer players in Angular 2.
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Obafemi Martins
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <a href="http://weboratory.io/obafemi-martins" target="_blank">visit site</a>
                    </Typography>
                    <Typography component="p">
                        Designed and built a personal website for a professional soccer players in Angular 2.
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                       Concord Engineering
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <a href="http://www.cetransportation.com" target="_blank">visit site</a>
                    </Typography>
                    <Typography component="p">
                        Designed and built a small site for a local company in PHP & JS.
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                       Safeharbor
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <a href="http://safeharbor.com/solutions/smartsupport/" target="_blank">visit site</a>
                    </Typography>
                    <Typography component="p">
                        Designed and built a site for a small software company in PHP & JS.
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        10 Forward
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <a href="ttps://ten-forward.com" target="_blank">visit site</a>
                    </Typography>
                    <Typography component="p">
                        Working for a non-profit teach startup. Have helped design and develop a number of projects.
                    </Typography>
                </CardContent>
            </Card>


        </div>

        )

    }


}

export default withStyles(styles)(Dev);