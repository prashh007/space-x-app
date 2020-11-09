import React from 'react';
import {Link} from 'react-router-dom';

 const Filters = ({years, handleFilterYear, handleSuccessLaunch, handleSuccessLand}) =><div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
 <div className="card">
   <div className="card-body">
     <h5 className="card-title">
       <b>Filters</b>
     </h5>
     <div className="card-text text-center">
       <span>Launch year
       </span>
       <hr style={{width:"75%", margin:"auto", marginBottom:12}}/>
     </div>
     <div className="row">
       {years ? years.map(year=><div className="col-6" key={year}>
         {/* <Link to={`/missions/${year}`}>{year}</Link> */}
         <button className="btn btn-sm btn-success mb-1" onClick={()=>handleFilterYear(year)}>{year}</button>
         </div>) : null}                  
     </div>
     <div>
       <div className="text-center mt-2">Successfull Launch
       </div>
       <hr style={{width:"80%", margin:"auto", marginBottom:12}}/>
     </div>                
     <div className="row">
       <div className="col">
          <button className="btn btn-sm btn-success" onClick={()=>handleSuccessLaunch('true')}>True</button>                    
       </div>
       <div className="col">
         <button className="btn btn-sm btn-success" onClick={()=>handleSuccessLaunch('false')}>False</button>
       </div>
     </div>
     <div>
       <div className="text-center mt-2">Successfull Landing
       </div>
       <hr style={{width:"80%", margin:"auto", marginBottom:12}}/>
     </div>                
     <div className="row">
       <div className="col">
          <button className="btn btn-sm btn-success" onClick={()=>handleSuccessLand('true')}>True</button>                    
       </div>
       <div className="col">
         <button className="btn btn-sm btn-success" onClick={()=>handleSuccessLand('false')}>False</button>
       </div>
     </div>
   </div>
 </div>
</div>

 export default Filters