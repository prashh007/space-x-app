import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {Header} from './components/Header'
import Missions from './components/Missions'
import Filters from './components/Filters'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      missions:null,
      selectedyear:null,
      successfullLaunch:null,
      successfullLand:null
    }
  }
  componentDidMount(){
    console.log('component did mount.');
    
    axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
    .then(response=>{      
      if(response.data){
        let filterYears = [];
        response.data.forEach(year => {
          if(filterYears.indexOf(year.launch_year) === -1){
            filterYears.push(year.launch_year);            
          }
        });
        console.log('response Data', response.data, filterYears);
        this.setState({
          missions: response.data,
          years:filterYears
        })
      }
    })
    .catch(error=>console.log('error', error.message))  
  }

  handleFilterYear = (year) =>{
    this.setState({selectedyear:year});
  }

  getMissionData = () =>{
    let {
      missions, 
      selectedyear, 
      successfullLaunch, 
      successfullLand
    } = this.state;  
      
    let filteredMission = selectedyear && missions ? missions.filter(mission=>mission.launch_year === selectedyear ) : missions;   
    
    return {filteredMission};
  }

  handleSuccessLaunch = (val) =>{
    this.setState({successfullLaunch:val});
  }
  handleSuccessLand = (val) =>{
    this.setState({successfullLand:val})
  }
  render(){ 
    const {years} = this.state;
    let {filteredMission} = this.getMissionData()
  return <div className="main">
    <div className="container-fluid">        
        <Header name="SpaceX Launch Programs"/>
        <div className="row">
          <Filters 
              years={years} 
              handleFilterYear={this.handleFilterYear}
              handleSuccessLaunch={this.handleSuccessLaunch}
              handleSuccessLand={this.handleSuccessLand}
              />
          <Missions filteredMission={filteredMission}/>
        </div>
    </div>
  </div>    
  }
}

export default App;