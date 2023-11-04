import React from 'react'
import { useLocation } from 'react-router-dom';
import "../css/allwarehouse.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Warehouse from '../components/Warehouse';


function AllWarehouse() {

  const location = useLocation();
  const album = location.pathname;
  const str = album.lastIndexOf('/');
  const id = parseInt(album.slice(str+1));

  const [warehouse, setWarehouse] = useState([]);
  const [warehousedetails, setWarehousedetails] = useState(null);
  // const [updatedata , setUpdateData] = useState({"name" : "Warehouse-165",
  // "code" : "W-00001",
  // "id" : 1,
  // "city": "Delhiiiiiiiiii",
  // "is_registered" : true,
  // "is_live" : false})
 console.log(warehouse);

  useEffect(()=>{
    axios.get('http://localhost:8000/warehouse')
      .then((response) => {
        setWarehouse(response.data);
        searchdata(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });


  function searchdata(response){
    for (let i=0; i<15;i++)
    {
      if(response[i].id === id)
      {
        setWarehousedetails(response[i]);
      }
    }
  }

  const handleupdate = () => {
    axios.put(`http://localhost:8000/warehouse/${id}` , {...warehousedetails, name:"Shivam"} )
    .then((res)=>{
      console.log("Updated data: ", res.data)
    })
    .catch((err)=>{
      console.log("Error: ", err.message);
    })
  }
  // console.log(warehouse);

  return (
    <div>
      <div className='allWarehouseMainContainer'>
      {warehousedetails !== null ? warehousedetails.city : console.log("Empty")}
      <button onClick={handleupdate}>Update</button>
      </div>
      <Warehouse/>
    </div>
  )
}

export default AllWarehouse