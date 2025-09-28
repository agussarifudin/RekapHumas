import React,{useState,useEffect} from 'react';
import axios from "axios";
import {MDBTable, MDBTableHead,MDBTableBody, MDBRow,MDBCol,MDBContainer} from "mdb-react-ui-kit";
import './App.css';

function App() {
  const [ data,setData]=useState([]);

  useEffect(()=>{
    loadUsersData();
  },[]);

  const loadUsersData = async ()=>{
return await axios.get("http://localhost:5000/berita")
.then((response)=>setData(response.data))
.catch((err)=>console.log(err))
  }

  console.log("data",data.record)
  return (
    <MDBContainer>
      <div style={{marginTop:"100px"}}>
        <h2 className='text-center'>Search, Filter, sort and Pagination using Json</h2>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead dark>
                  <tr>
                    <th scope='col'>No.</th>
                    <th scope='col'>judul</th>
                    <th scope='col'>website</th>
                  </tr>
              </MDBTableHead>
              {data.length ===0?(
                <MDBTableBody className='align-center mb-0'>
                  <tr>
                    <td colSpan={8} className='text-center mb-0'>
                      No Data Found
                    </td>
                  </tr>
                </MDBTableBody>
              ):(
                data.map((item,index)=>(
                  <MDBTableBody key={index}>
                        <tr>
                          <th scope='row'>{index+1}</th>
                          <td>{item.judul}</td>
                          <td>{item.website}</td>
                        </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>

  );
}

export default App;
