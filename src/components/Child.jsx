import React from 'react'

function Child(props) {
  return (
    <>
        
        <h1>Hello my Name is :{props.name}</h1>
        <h1>Hello my age is :{props.age}</h1>
        <h1>Hello my city is :{props.city}</h1>
        


     
    </>
  )
}

Child.defaultProps={
       name:"ABC",
       age:22,
       city:"Nagpur"
};


export default Child