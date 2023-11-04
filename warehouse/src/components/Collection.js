import React from 'react';
import { useState, useEffect } from 'react';
import CollectionList from './CollectionList';
import "../css/collection.css";
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";

function Collection() {
  const [warehouse, setWarehouse] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/warehouse')
      .then((response) => {
        setWarehouse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },[]);

  return (
    <div>
     <div className='collectionMainContainer page-width'>
      <div className='searchBar'>
      <h2>List of all the warehouses</h2>
      <button className='searchButton'>Search &nbsp; <IoIosSearch/></button>
      </div>
      <div className='collectionContainer'>
        {warehouse.length !==0 ?
        warehouse.map((warehouse) => (
          <div className='collectionList'  key={warehouse.id}>
              <CollectionList warehouse={warehouse} key={warehouse.id}/>
          </div>
        )): null}
      </div>
     
     </div>
    </div>
  )
}


export default Collection