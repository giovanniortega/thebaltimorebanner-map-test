import React, {useState, forwardRef, useImperativeHandle} from 'react';
import classes from './InfoControls.module.css';

const InfoControls = forwardRef(({
  infoControlsData, 
  onDistrictSelectHandler
}, ref) => {

  // const [zoom, setZoom] = useState(6);
  const [selectedValue, setSelectedValue] = useState(0);
  const [districtInfoBox, setDistrictInfoBox] = useState(infoControlsData[0]);

  useImperativeHandle(ref, () => ({

    setSelectedDistrictInfo (value) {
      setSelectedValue(value);
      setDistrictInfoBox(infoControlsData[value]);
    }
    
  }));

  return (
    <div className={classes['infcontrols-container']}>
      {/* <div>
        <label htmlFor="zoom">Zoom</label>
          <input
            type="number"
            id="zoom"
            name="zoom"
            value={zoom}
            onChange={(event) => setZoom(Number(event.target.value))}
          />
      </div> */}
      
      <select className={classes['control-select']} onChange={onDistrictSelectHandler} value={selectedValue}>
        {infoControlsData.map((option, i)=><option key={i} value={i} >{option.title}</option>)}
      </select>

      <div>
        <table className={classes['table-info']}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Position</td>
              <td>Afiliation</td>
            </tr>
          </thead>
          <tbody>
            {
              districtInfoBox.tableInfo.map((item, i)=>(
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.afiliation}</td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
});

export default InfoControls;