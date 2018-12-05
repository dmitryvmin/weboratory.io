import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';

const gixCover = process.env.PUBLIC_URL + '/assets/';

class Design extends Component {
  constructor() {
    super();
    this.state = { 
      currentImage: 0,
      expanded: false
    };
  }
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const { expanded } = this.state;

    return (
      <div>

        <h1>UX / Design</h1>

        <div>
          <Card style={styles.card}>   
            <CardContent style={styles.cardContent}>
              <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <div style={styles.heading}><h2>Drawings & Paintings</h2></div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                  <div style={{width: '100%', height: '100%'}}>
                    <Gallery photos={photos} onClick={this.openLightbox} />
                    <Lightbox images={photos}
                              onClose={this.closeLightbox}
                              onClickPrev={this.gotoPrevious}
                              onClickNext={this.gotoNext}
                              currentImage={this.state.currentImage}
                              isOpen={this.state.lightboxIsOpen} />
                  </div>

                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardContent>
          </Card>

          <Card style={styles.card}>   
          <CardContent style={styles.cardContent}>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div style={styles.heading}><h2>Prototyping</h2></div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>

                <div style={{width: '100%'}}>
                  <h4>Ocean Medallion</h4>
                  <Card style={styles.subCard}>   
                    <CardContent style={styles.CardContent}>

                    <Typography style={styles.p} component="p">
                    The <a href="https://www.princess.com/ships-and-experience/ocean-medallion/" target="_blank">Ocean Medallion</a> is a wearable device that is meant to act as a personal concierge, offering way finding, food and beverage ordering, gaming, entertainment, and other functions.
                    </Typography>

                      {/*<img style={{height: '400px', margin: '1em'}} src={`${gixCover}carnival.jpg`} />*/}

                      <Link><a href="https://framer.cloud/ycoEv/" target="_blank">Journey Past - Kiosk Touch Screen</a></Link>
                      <Link><a href="https://framer.cloud/IQUNo/" target="_blank">Journey Past - Mobile</a></Link>
                      <Link><a href="https://framer.cloud/oSLdP/" target="_blank">Compass Navigation</a></Link>
                      <Link><a href="https://framer.cloud/uFiOM/" target="_blank">Snapper Tagging</a></Link>
                      <Link><a href="https://framer.cloud/zfVrj/" target="_blank">Snapper</a></Link>
                      <Link><a href="https://framer.cloud/OWFfd/" target="_blank">Entering Constellations on mobile</a></Link>
                      
                    </CardContent>
                  </Card>

                  <h4>UW: GIX</h4>
                  <Card style={styles.subCard}>   
                    <CardContent style={styles.CardContent}>
                      <Typography style={styles.p} component="p">
                      The <a href="https://gixnetwork.org/" target="_blank">Global Innovation Exchange (GIX)</a> is a global partnership between Tsinghua University and the University of Washington, with initial support from Microsoft
                    </Typography>

                    <Link><a href="http://weboratory.io/prototypes/gix.html" target="_blank">Touch screen navigation prototype</a></Link>
                    <Link><a href="https://youtu.be/QB1d-dTteKo" target="_blank">Live Installation</a></Link>

                    {/*<div style={{width: '100%', height: '100%'}}>
                      <iframe width="560" height="315" src="https://youtu.be/QB1d-dTteKo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>*/}

                    </CardContent>
                  </Card>
                </div>

              </ExpansionPanelDetails>
            </ExpansionPanel>
 
            </CardContent>
          </Card>   

          <Card style={styles.card}>   
            <CardContent style={styles.cardContent}>
              <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <div style={styles.heading}><h2>SVG Animations</h2></div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                  <div style={{width: '100%'}}>
                    <h4 style={{marginBottom: '1em'}}>Level 11</h4>

                    <div style={{marginBottom: '1em', display: 'inline-block'}}>
                      <img style={{width: '50%', margin: '1em'}} src={`${gixCover}circle.jpg`} />
                      <img style={{width: '50%', margin: '1em'}} src={`${gixCover}sketch.jpg`} />
                    </div>

                    <Link><a href="http://weboratory.io/prototypes/level11.html" target="_blank">prototype</a></Link>

                    <h4 style={{marginBottom: '3em', marginTop: '4em'}}>Intellectual Ventures | Global Good</h4>

                    <div style={{height: '400px', marginBottom: '1em', display: 'inline-block'}}>
                      <img style={{width: '100%'}} src={`${gixCover}interchange-1.jpg`} />
                      <img style={{width: '100%', marginTop: '1em', marginBottom: '1em'}} src={`${gixCover}interchange-2.png`} />
                    </div>

                    <Link><a href="" target="_blank">prototype</a></Link>
                  </div>

                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardContent>
          </Card>

        </div>
      </div>
    );
  }
}

export default Design;

const Link = styled.div`
  display: block;
  margin: 0.5em 0;
`;

const styles = {
  card: {
    minWidth: 275,
    boxShadow: 'none',
    backgroundColor: 'transparent'
  },
  subCard: {
    boxShadow: 'none',
  },
  cardContent: {
    paddingBottom: '5px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  p: {
    textAlign: 'left',
    marginBottom: '1em',
    fontSize: '1em'
  },
  heading: {
    flexBasis: '100%',
    flexShrink: 0,
  }
};

const photos = [
  { src: 'http://weboratory.io/art/11.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/2.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/3.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/4.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/5.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/6.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/7.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/8.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/9.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/10.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/1.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/12.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/13.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/14.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/15.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/16.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/17.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/18.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/19.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/20.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/21.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/22.jpg', width: 1, height: 1.2 },
  { src: 'http://weboratory.io/art/23.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/24.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/25.jpg', width: 1.2, height: 1 },
  { src: 'http://weboratory.io/art/26.jpg', width: 1.2, height: 1 },
];
