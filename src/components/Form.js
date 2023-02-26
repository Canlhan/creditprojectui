



import React from 'react'
import { useForm } from "react-hook-form";
import style from './form.module.css'

const Form = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit=(data)=>{
        
        console.log("data: "+JSON.stringify(data));

    }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className={` ${style.middle}`}>
     <div>
     <div class={`row  `}>
                <div class="col">
                    <label for="firstName" >FİRST NAME <span style={{color:'red'}}>* </span></label>
                     <input type="text" {...register("firstName")} class="form-control" id="firstName "placeholder="First name" required/>
                </div>
                <div class="col">
                <label for="firstName">LAST NAME <span style={{color:'red'}}>* </span></label>
                    <input type="text" class="form-control" {...register("lastName")} placeholder="Last name" required/>
                </div>
                
    </div>
    <div class={`row  mt-3 `}>
                <div class="col">
                    <label for="identifyNo" title='must be 11 character'>IDENTIFY NO <span style={{color:'red'}}>* </span> </label>
                     <input type="text" {...register("identifyNo")} class="form-control" id="identifyNo "
                      maxlength="11" minLength="11"
                      pattern='^[0-9]{11}'
                     placeholder="Identify no" required/>
                </div>
                <div class="col">
                <label for="telephonNumber" title='must be 10 digit'>TELEPHONE NUMBER <span style={{color:'red'}}>* </span></label>
                    <input type="text" class="form-control" {...register("telephonNumber")} placeholder="Telephone number" required/>
                </div>
                
    </div>
    <div class={`row  mt-3 `}>
                <div class="col">
                    <label for="birthDate">BIRTHDATE <span style={{color:'red'}}>* </span> </label>
                     <input type="date" {...register("birthDate")} class="form-control" id="birthDate "placeholder="SALARY" required/>
                </div>
                <div class="col">
                <label for="guarantee">GUARANTEE</label>
                    <input type="text" class="form-control" {...register("guarantee")} placeholder="guarantee "/>
                </div>
                
    </div>
    <div class={`row  mt-3 `}>
                <div class="col">
                    <label for="salary">SALARY <span style={{color:'red'}}>* </span> </label>
                     <input type="number" {...register("salary")} class="form-control" id="salary "placeholder="SALARY" required/>
                </div>
                
                
    </div>

    <div class={`row  mt-3 ${style.middle} `}>
            <button type="submit" className='btn btn-primary w-50'> Application</button>             
    </div>
    
    
    </div>

     
    
    
      
      
    </form>
    
    


    </>
  )
}

export default Form