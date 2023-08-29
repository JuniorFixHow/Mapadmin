import React from 'react';
import './locationTable.css';
import {BsFillPencilFill} from 'react-icons/bs';
import {ImBin2} from 'react-icons/im';
import { Locations } from '../../utils/dummyLocations';

const LocationsTable = () => {
  return (
    <div className='locationtable' >
        <div className="top">
            <div className="titles">
                <span className="title">Locations</span>
                <button className='new' >Add New</button>
            </div>
            <div className="lefts">
                <span className="unames">Image</span>
                <span className="unames">Name</span>
                <span className="unames">Category</span>
            </div>
            {
                Locations &&
                Locations.map(loc=>(

                    <div key={loc.id} className="details">
                        <div className="left">
                            <div className="locimage">
                                <img  src={loc.image} alt="location" />
                            </div>
                            <span className="uname">{loc.name}</span>
                            <span className="uname">{loc.category}</span>
                        </div>
                        <div className="right">
                            <BsFillPencilFill className='edit' />
                            <ImBin2 className='delete' />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default LocationsTable