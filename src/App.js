/* global chrome */
import React from 'react';
import {Button, Checkbox, FormControlLabel, FormLabel, FormGroup, FormControl, Typography} from '@material-ui/core';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      views: true,
      comments: true,
      merchandise: true,
      meta: true,
      tickets: true,
      subscribe: true,
      watchNext: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount(){
    chrome.storage.local.get(['options'], (result) => {
      this.setState(result.options);
    });
  }

  handleChange({target}){
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [target.name]: value
    });
  }

  handleSave(){
    chrome.storage.local.set({options: this.state});
    chrome.tabs.reload(function(){});
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <FormControl component="fieldset">
         <FormGroup aria-label="position">
         <div style={{display:"flex", justifyContent: "center", alignContent:"center"}}>
         <img src="img/icon-48.png" style={{width:"48px", height:"48px"}} alt="logo"/>
         </div>
         <Typography variant="h6">YOUTUBE CUSTOMISER</Typography>
          <FormControlLabel  control={<Checkbox checked={this.state.views} name="views" onChange={this.handleChange} />}   label="View counter"/>
          <FormControlLabel   control={<Checkbox checked={this.state.comments}/>} name="comments" onChange={this.handleChange}  label="Comments"/>
          <FormControlLabel   control={<Checkbox checked={this.state.merchandise}/>} name="merchandise" onChange={this.handleChange}  label="Merchandise"/>
          <FormControlLabel   control={<Checkbox checked={this.state.meta}/>} name="meta" onChange={this.handleChange}  label="Meta content"/>
          <FormControlLabel   control={<Checkbox checked={this.state.tickets}/>} name="tickets" onChange={this.handleChange}  label="Tickets"/>
          <FormControlLabel   control={<Checkbox checked={this.state.subscribe}/>}  name="subscribe" onChange={this.handleChange} label="Subscribe"/>
          <FormControlLabel  control={<Checkbox checked={this.state.watchNext} />} name="watchNext" onChange={this.handleChange}  label="Watch next"/>
          <Button variant="contained" color="secondary" onClick={this.handleSave}>Save</Button>
         </FormGroup>
      </FormControl>
      </header>
      
    </div>
  )
}
}

export default App;
