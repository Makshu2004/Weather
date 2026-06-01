import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
  const INIT_URL="https://images.unsplash.com/photo-1565010431002-0c91cad04dd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww"

  const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL="https://images.unsplash.com/photo-1640942824064-6209c10b9091?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlciUyMGNvbGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL="https://images.unsplash.com/photo-1573482617210-6e98fd82f52d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHdlYXRoZXIlMjBSQUlOJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
  
    return (
     <div className="InfoBox">
         
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
             <CardMedia
             sx={{ height: 140 }}
             image={
               info.humidity>80
               ?RAIN_URL
               :info.temp>15
               ?HOT_URL
               :COLD_URL
              }
             title="green iguana"
              />
             <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                   info.humidity>80
                   ?<ThunderstormIcon/>
                   :info.temp>15
                   ?<SunnyIcon/>
                   :<AcUnitIcon/>
                   }
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary'  }} component={"span"}>
       
                <p>Temparature={info.temp}&deg;</p>
                <p>Humidity={info.humidity}</p>
                <p>Min Temp={info.tempMin}&deg;</p>
                <p>Max Temp={info.tempMax}&deg;</p>
                <p>The weather can be describe as <b><i>{info.weather}</i></b> feels like={info.feelsLike}&deg; </p>

                 </Typography>
                </CardContent>
                 </Card>
         </div>
     </div>
    )
}