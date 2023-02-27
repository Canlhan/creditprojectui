



import React from 'react'
import Form from '../components/Form'


import styles from './homepage.module.css'
const Homepage = ({addLoan}) => {
    

 



  return (
    <>
    
     <div className="container  align-middle" >
      <h4> Credit Application</h4>
      <div className={`row ${styles.middle}`}>
        
     
        <Form addLoan={addLoan}/>
      </div>

     </div>
    
    </>
  )
}

export default Homepage