import React, {useRef, useState, useEffect, forwardRef, useImperativeHandle} from "react";
// import { createCustomEqual } from "fast-equals";
// import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import orangeMarker from '../images/orange-marker.svg';
import greenMarker from '../images/green-marker.svg';
import classes from './Map.module.css';

const Map = forwardRef(({
  onDistrictMarkHandler,
  mapData,
  style,
  ...options
}, ref) => {

  const mapRef = useRef(null);
  const [map, setMap] = useState();
  const [locations, setLocations] = useState([]); 
  let markers = [];
  // const infowindow = new window.google.maps.InfoWindow();

  useEffect(()=>{

    let mapLocations = [];

    mapData.forEach(item => {
      mapLocations.push({
        location: new window.google.maps.LatLng(item.location.lat, item.location.lgn),
        title: item.title
      })
    });

    setLocations(mapLocations);

  },[mapData])

  useEffect(()=>{
    if(mapRef.current && !map){
      setMap(new window.google.maps.Map(mapRef.current, {}));
    }
  },[mapRef, map])

  if (map) {
    map.setOptions(options);
  }

  // useDeepCompareEffectForMaps(() => {
  //   if (map) {
  //     map.setOptions(options);
  //   }
  // }, [map, options]);

  const resetIcons = () => {
    markers.forEach((marker)=>{
      marker.setIcon(orangeMarker);
    })
  } 

  locations.forEach((location, i)=>{
    
    const marker = new window.google.maps.Marker({
      position: location.location,
      label: String(i + 1),
      // animation: window.google.maps.Animation.DROP,
      map: map,
      title: location.title,
      icon: orangeMarker,
    });

    window.google.maps.event.addListener(marker, 'click', (function(marker) {

      return function() {
        // infowindow.setContent(location.title);
        // infowindow.open(map, marker);
        map.panTo(location.location);
        resetIcons();
        marker.setIcon(greenMarker);
        onDistrictMarkHandler(i);
      }

    })(marker));

    markers.push(marker);

    if(markers.length === 1){
      markers[0].setIcon(greenMarker);
    }
    
  })

  useImperativeHandle(ref, () => ({

    panToLocation (val) {
      window.google.maps.event.trigger(markers[val], 'click');
    }

  }));

  return (
    <div ref={mapRef} className={classes['map-container']} />
  );
});

///////////////////////////////////////////////////////

// const deepCompareEqualsForMaps = createCustomEqual(
//   (deepEqual) => (a, b) => {
//     if (
//       isLatLngLiteral(a) ||
//       a instanceof window.google.maps.LatLng ||
//       isLatLngLiteral(b) ||
//       b instanceof window.google.maps.LatLng
//     ) {
//       return new window.google.maps.LatLng(a).equals(new window.google.maps.LatLng(b));
//     }
//     return deepEqual(a, b);
//   }
// );

// function useDeepCompareMemoize(value) {
//   const ref = useRef();

//   if (!deepCompareEqualsForMaps(value, ref.current)) {
//     ref.current = value;
//   }

//   return ref.current;

// }

// function useDeepCompareEffectForMaps(
//   callback,
//   dependencies
// ) {
//   React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
// }

export default Map;