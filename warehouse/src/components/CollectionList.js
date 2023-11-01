import React from 'react'

function CollectionList(props) {
  console.log(props)
  return (
    <div>
      <div className='collectionListMainContainer'>
        <p>{props.warehouse.name}</p>
        <p>City : {props.warehouse.city}</p>
        <p>Space available : {props.warehouse.space_available}</p>
      </div>
    </div>
  )
}

export default CollectionList