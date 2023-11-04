import React from 'react';
import { useLocation } from 'react-router-dom';
import "../css/allwarehouse.css";
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import WarehouseImg from "../assets/warehouse.png";
import {BiArrowBack} from "react-icons/bi";
import { Link, useNavigate} from 'react-router-dom';

function Warehouse() {
  const location = useLocation();
  const album = location.pathname;
  const str = album.lastIndexOf('/');
  const id = parseInt(album.slice(str+1));
  const [warehousedetails, setWarehousedetails] = useState(null);
  const navigate = useNavigate();

  const searchdata = useCallback((response) => {
    for (let i=0; i<15;i++)
    {
      if(response[i].id === id)
      {
        setWarehousedetails(response[i]);
      }
    }
  },[id]);

  useEffect(()=>{
    axios.get('http://localhost:8000/warehouse')
      .then((response) => {
        searchdata(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      
  },[searchdata]);

  const handleupdate = () => {
    axios.put(`http://localhost:8000/warehouse/${id}` , {...warehousedetails, name:"Shivam"} )
    .then((res)=>{
      console.log("Updated data: ", res.data)
    })
    .catch((err)=>{
      console.log("Error: ", err.message);
    });
  }

  return (
    <div>
      <div className='warehouseMainContainer'>
      <div className='allWarehouseMainContainer page-width'>
        <div className='warehouseHeader'>
          <Link className='warehousebackButton'><p className='warehousebackButton' onClick={() => navigate(-1)}><BiArrowBack width="30%"/> &nbsp; Back</p></Link>
        </div>
        <div className='detailsMainCOntainer'>
          <div className='iconContainer'>
            <div className='image'>
              <img src={WarehouseImg} alt="image"></img>
            </div>
          </div>
          <div className='detailsContainer'>
            <p className='detailsNameContainer'>{warehousedetails !== null ? warehousedetails.name : null}</p>
            <p>{warehousedetails !== null ? warehousedetails.city : null}</p>
          </div>
        </div>
      {/* {warehousedetails !== null ? warehousedetails.city : null}
      <button onClick={handleupdate}>Update</button> */}
      </div>
      </div>
    </div>
  )
}

export default Warehouse