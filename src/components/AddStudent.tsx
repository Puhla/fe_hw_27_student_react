import React, { ChangeEvent, useState } from 'react'



export default function AddStudent() {
    type StudentData ={
    firstName:string,
    lastName:string,
    age:string
  };

  const[formData,setFormData] = useState<StudentData>({firstName:'', lastName:'', age:''});
  
  const changeHandler =(event: ChangeEvent<HTMLInputElement>):void=>{
   
    //ссылка на элемент, с кот произошло событие (см ниже)
   const {value,name} = event.target;
   const newData:StudentData = {...formData,[name]:value};
   setFormData(newData);
   console.log(newData);

  }
  
    return (
        
        <div>
            <p>Students profile.</p>
        <form >
            <input value={formData.firstName} name='firstName' placeholder='firstName' onChange={changeHandler}/>
            <input value={formData.lastName} name='lastName' placeholder='lastName' onChange={changeHandler}/>
            <input value={formData.age} name='age' placeholder='age' onChange={changeHandler}/>
            <button>Add</button>
        </form>
        </div>
    )
}