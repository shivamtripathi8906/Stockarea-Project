import React from 'react';
import { useState, useEffect } from 'react';
import CollectionList from './CollectionList';
import "../css/collection.css";

function Collection() {
  const [warehouse, setWarehouse] = useState([]);


  useEffect(() => {
    import('../db/db.json')
      .then(data => {
        setWarehouse(data.warehouse);
      })
      .catch(error => {
        console.error('Error fetching local JSON data:', error);
      });
  }, []);

  // console.log(warehouse);


  return (
    <div>
     <div className='collectionMainContainer page-width'>
      <h2>List of all the warehouses</h2>
      <div className='collectionContainer'>
        {warehouse.length !==0 ?
        warehouse.map((warehouse) => (
          <div className='collectionList'  key={warehouse.id}>
              <CollectionList warehouse={warehouse} key={warehouse.id}/>
          </div>
        )): console.log("Empty")}
      </div>
     
     </div>
    </div>
  )
}


export default Collection