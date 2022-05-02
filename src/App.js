import React from 'react';
import MapBanner from './MapBanner/MapBanner';
import './App.css';

function App() {

  const districts = [
    {
      location: {lat: 36.51743786752343, lgn: -86.38124193596545},
      title: 'District 1',
      tableInfo: [
        {
          name: 'Alice Florent',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Marián Valentin',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Rida Charleigh',
          position: 'Mayor',
          afiliation: 'Republican'
        },
      ],
      boxContent: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet tincidunt neque, a faucibus nibh molestie vitae. Sed dictum arcu et quam commodo molestie.'
      }
    },
    {
      location: {lat: 34.89848019577603, lgn: -92.43824107695855},
      title: 'District 2',
      tableInfo: [
        {
          name: 'Vincenc Steren',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Gawain Merav',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Arda Aylen',
          position: 'Mayor',
          afiliation: 'Republican'
        },
      ],
      boxContent: {
        text: 'Nam sit amet convallis sem. Vivamus vestibulum magna ac ex tempor pellentesque. Proin at ipsum pulvinar, varius dolor sed, dictum ipsum.'
      }
    },
    {
      location: {lat: 34.06116939807988, lgn: -84.38732296408575},
      title: 'District 3',
      tableInfo: [
        {
          name: 'Ionatán Madalyn',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Sefton Mårten',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Dionysus Sigmundur',
          position: 'Mayor',
          afiliation: 'Republican'
        },
      ],
      boxContent: {
        text: 'Nunc in leo non felis scelerisque faucibus a nec lacus. Vestibulum imperdiet, nisi sed auctor faucibus, mauris purus vestibulum lectus, nec gravida urna ante non nibh.'
      }
    },
    {
      location: {lat: 33.62371270202904, lgn: -90.06811097830906},
      title: 'District 4',
      tableInfo: [
        {
          name: 'Nolwenn Francesca',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Tanzi Iseult',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Yehu Acheloios',
          position: 'Mayor',
          afiliation: 'Republican'
        },
      ],
      boxContent: {
        text: 'Vivamus laoreet mattis lectus, non mollis ante elementum ac.'
      }
    },
    {
      location: {lat: 39.256373930890966, lgn: -84.29877339028508},
      title: 'District 5',
      tableInfo: [
        {
          name: 'René Rowen',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Kriemhild Noémi',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Godafrid DeAndre',
          position: 'Mayor',
          afiliation: 'Republican'
        },
      ],
      boxContent: {
        text: 'Cras suscipit leo ex, in dictum magna pharetra id. Donec nisi odio, imperdiet eget turpis ut, mollis luctus felis.'
      }
    },
    {
      location: {lat: 40.2062154539842, lgn: -89.61927722660954},
      title: 'District 6',
      tableInfo: [
        {
          name: 'Vonahe Amir',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Yoshiro Ruth',
          position: 'Mayor',
          afiliation: 'Republican'
        },
        {
          name: 'Edi Sem',
          position: 'Mayor',
          afiliation: 'Republican'
        },
      ],
      boxContent: {
        text: 'Mauris ut orci non dui hendrerit placerat ac in diam. Praesent scelerisque elit ligula, nec feugiat massa accumsan nec.'
      }
    }
  ];

  return (
    <>
      <MapBanner mapBannerData={districts}/>
    </>
    
  );
}

export default App;
