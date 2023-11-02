import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AllWarehouse() {
  const [data, dataSetdata] = useState([]);

  const location = useLocation();
  const album = location.pathname;

  

  console.log(album);
  return (
    <div>
        <p>thiws</p>
    </div>
  )
}

export default AllWarehouse