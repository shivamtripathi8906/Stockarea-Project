import React from 'react';
import { Link } from 'react-router-dom';

function CollectionList(props) {
  // console.log(props)
  return (
    <div>
      <div className='collectionListMainContainer'>
        <p className='collectionListName'>{props.warehouse.name}</p>
        <p>City : {props.warehouse.city}</p>
        <p>Space available : {props.warehouse.space_available}</p>
        <p className='collectionListLink'><Link to={"/details/"+ props.warehouse.id}>Know More </Link></p>
      </div>
    </div>
  )
}

export default CollectionList