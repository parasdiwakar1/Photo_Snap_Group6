
import Details from './details.jsx'
import data from './Data.js';
import './details.css'


 const Review=()=>{
    return(
      <>
      <div className="container">
        <h3 className="title">LOVED BY MANY! </h3>
          <h1 className="title_heading">JOIN MILLIONS OF CREATORS!</h1>
            <div className="row"> 
              {data.map((data,index) =>(
                <div className='col' key={index}>
                    <Details{...data}/>
                </div>    
                ))}
            </div>  
      </div>
      
      
      </>
        

    );
 };
 export default Review;