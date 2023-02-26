


import React from 'react'
import {AiFillCheckSquare,AiFillCloseSquare} from "react-icons/ai";

const Loan = ({loan,customer}) => {

  return (
    <>
        <div className="row">
        <div className="col">
             {customer.identifyNo}
            </div>
            <div className="col">
             {customer.firstName}
            </div>

            <div className="col">

              {customer.lastName}
                
            </div> 
            <div className="col">
              {customer.salary}
            </div>
            <div className="col">
              {customer.guarantee === 0 ? 0:customer.guarantee }
            </div>
            <div className="col-2">
              {customer.birthDate }
            </div>
            
            <div className="col">
              {customer.creditScore.creditScore}
            </div>
            <div className="col">
            {loan.approval?loan.limit:0}
            </div>
            <div className="col-2">
                <div className="check w-100 ">
                <span className='p-2'> {loan.approval?"onaylandı":"onaylanmadı"}</span>
                  {
                    loan.approval?<AiFillCheckSquare color='green'/> 
                    :
                    <AiFillCloseSquare color='red'/>     
                  }
                  
                </div>
              </div> 
        </div>
    </>
  )
}

export default Loan;