

import React, { useEffect, useState } from 'react'
import CustomNavbar from "../components/CustomNavbar"
import Loan from '../components/Loan';
import style from "./loanapplications.module.css"

const LoanApplication = ({loan}) => {

  const customerId=localStorage.getItem("customerId");
  const[customer,setCustomer]=useState();
  const[applications,setApplicaitons]=useState([]);

  const fetchLoanApplciatonsOfCustomer=async ()=>{

    const url=`http://localhost:8086/api/v1/customer/${customerId}`
    const response = await fetch(url).then((response)=>response.json())
    .then((data)=>
  {  console.log("loans: "+JSON.stringify(data))
        setCustomer(data)
        setApplicaitons(data.loanApplications)
        console.log("apppppoans: "+JSON.stringify(data.loanApplications))
      }
        
    );
  
  }

  useEffect(()=>{

    
      fetchLoanApplciatonsOfCustomer();
  },[])

  return (

    <>
      <CustomNavbar/>
      <h5 className='mt-3'> Your  application</h5>
      <hr />
      <div className="container">
      <div className="row">
            
           <div className="col">
              Identify No
            </div>
            <div className="col">
              First Name
            </div>

            <div className="col">
              Last Name   
            </div> 
            <div className="col">
              Salary
            </div>
            <div className="col">
              Guarantee
            </div>
            <div className="col-2">
              Birthdate
            </div>
            <div className="col">
              Credit Score
            </div>
            <div className="col">
             Limit
            </div>
            <div className="col-2">
                Status
            </div> 
        </div>
        <hr />
        {
         applications.map((loan)=><Loan loan={loan} customer={customer}/>)
        }
        
        
      </div>

      <div className={`${style.addApp}`}>

         <button type="button" class="btn btn-primary">Application new credit</button>
      </div>
    </>
  )
}


export default LoanApplication;