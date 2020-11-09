import React from 'react';

const Missions = ({filteredMission}) => <div className="col-lg-10 col-md-10 col-sm-6 col-xs-12">
            <div className="row">
            {filteredMission ? filteredMission.map((mission, index) => <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={mission.mission_name}>
              <div className="card mb-3">
                <div style={{background:"#f2f2f2", margin:"18px 18px 0 18px"}}>
                  <img src={mission.links.mission_patch} className="card-img-top" alt=
                {mission.mission_patch}/>                  
                </div> 
                <div className="card-body">
                    <div style={{color:'#1c2e91', fontWeight:'bold'}}>{mission.mission_name} #{index+1}</div>
                    <div><b>Mission Ids</b> : {mission.mission_id}</div>
                    <div><b>Launch year</b> : {mission.launch_year}</div>
                    <div><b>Successfull Launch</b> : {mission.launch_success ? 'Yes' : "No"}</div>
                    <div><b>Successfull Landing</b> : {mission.launch_window ? 'success' : "fail"}</div>                  
                </div>
              </div>                
              </div>) : 'loading'}              
            </div>            
          </div>

export default Missions
