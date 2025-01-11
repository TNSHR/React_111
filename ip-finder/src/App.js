import { useActionState, useEffect,useState } from "react";
import Axios from 'axios';
import Map from "react-map-gl/dist/esm/components/map";
import "./App.css"

function App() {

  const [ipDetailes, setIpDetailes] = useState([]);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);

  useEffect(()=>{
    Axios.get('https://ipapi.co/json/').then((res)=>{
      setIpDetailes(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);

    });
  },[])
  
  return (
    <div>
      <h1 className="heading">IP Adreess Finder</h1>
      <div className="App">
        <div className="left">
          <h4> What is my ipv4 Adreess? </h4>
          <h1 id="ip">{ipDetailes.ip}</h1>
          <h4>Approximate Location :</h4>
          <p> {ipDetailes.city},{ipDetailes.region},{ipDetailes.country_name}.</p>
          <h4>Internet service Provider</h4>
          <p>{ipDetailes.org}</p>
        </div>
        <Map lat={lat} lon={lon}/>
      </div>
      
    </div>
  );
}

export default App;