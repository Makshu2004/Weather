

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import {useState} from "react" 

export default function SearchBox({updateinfo}){
     let [city,setCity]=useState("");
     let [error,setError]=useState(false);
 

    const API_URL=import.meta.env.VITE_API_URL;
    const API_KEY=import.meta.env.VITE_API_KEY;

    let getweather=async()=>{
     try{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
       let jsonresponse=await response.json();
       
       let result={
        city:city,
        temp:jsonresponse.main.temp,
        tempMin:jsonresponse.main.temp_min,
        tempMax:jsonresponse.main.temp_max,
        humidity:jsonresponse.main.humidity,
        feelsLike:jsonresponse.main.feels_like,
        weather:jsonresponse.weather[0].description
       }
       console.log(result);
       return result;
    }catch(err){
      throw err;
    }

    }
 
   
    let handel=(event)=>{
       setError(false);
       setCity(event.target.value);
      
    }
  
    let handelSubmit= async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let info=await getweather();
        updateinfo(info);
      }catch(err){
         setError(true);
           
      }
    }


    return(
      <>
       
         
            <form onSubmit={handelSubmit}>
               <div className='searchbox'>
   
                <TextField id="City" 
                           label="City Name" 
                           variant="outlined"
                           required 
                           value={city}
                            onChange={handel}
                            />
                 <br></br> <br></br>
                <Button variant="contained" type='submit' >
                 Search
                 </Button>
              {error&&<p style={{color:"red"}}>No such place exists</p>}
              </div>
            </form>
        </>
    )
}