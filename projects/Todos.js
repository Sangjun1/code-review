import React, {Component} from 'react';

const Todos = (props) =>{

  console.log(props);
  return(
    <div className="checkBoxText">
      <h2>{props.title}</h2>
      {
        props.items.map((item, index)=>{
          return <li key={index}><input type="checkbox" /> {item}</li>
        })
      }
    </div>
  )
};

export default Todos;
