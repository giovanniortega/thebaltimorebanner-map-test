import React, {useRef} from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from './Map';
import InfoControls from './InfoControls';
import classes from './MapBanner.module.css';

const MapBanner = ({mapBannerData}) => {

  const API_KEY = process.env.REACT_APP_MAPS_APIKEY;
  
  const render = (status) => {
    return <h1>{status}</h1>;
  };

  const center = {
    lat: 36.51743786752343,
    lng: -86.38124193596545,
  };

  const mapRef = useRef();
  const infoRef = useRef();

  const districtSelectHandler = (event) => {
    mapRef.current.panToLocation(event.target.value);
  }

  const districtMarkHandler = (value) => {
    infoRef.current.setSelectedDistrictInfo(value);
  }

  return (
    <div className={classes['banner-container']}>
      <InfoControls 
        infoControlsData={mapBannerData} 
        onDistrictSelectHandler={districtSelectHandler} 
        ref={infoRef}
      />

      <Wrapper apiKey={API_KEY} render={render} >
        <Map
          center={center}
          zoom={6}
          style={{ width: "66%", height: "400px" }}
          mapData={mapBannerData}
          onDistrictMarkHandler={districtMarkHandler}
          ref={mapRef}
        >
        </Map>
      </Wrapper>
    </div>
    
  );
}

export default MapBanner;
