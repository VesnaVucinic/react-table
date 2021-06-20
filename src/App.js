import React, { useState, useEffect, useMemo }from 'react'
import axios from 'axios';
import './App'

function App() {
 // data state to store the Users API data. 
 //Initially it  is an empty array.
 const [data,setData] = useState([]);
 
 useEffect(() => {
  (async () => {

    const result = await axios("https://jsonplaceholder.typicode.com/users");
    setData(result.data);
    console.log(result.data)
  })();
 }, []);

 const tabledata = useMemo(
   () => [
    {
      //first group - Users
      Header: 'Users',
        // group columns
      columns: [
        {
          Header: "Id",
          accessor: "name"
        },
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "User Name",
          accessor: "username"
        }
      ]
    },
    {//  Second group - Contact Details
      Header: "Contact Details",
      // group columns
      columns: [
        {
          Header: "Phone",
          accessor: "phone"
        },
        {
          Header: "Email",
          accessor: "email"
        },
        {
          Header: "Website",
          accessor: "website"
        }
      ]
    }
  ],
  []
 );

 return (
   <div className="App">
     <Table columns={tabledata} data={data} />
   </div>
 )

}
