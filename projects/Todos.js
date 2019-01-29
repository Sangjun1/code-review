import React, {Component} from 'react';

const Todos = (props) =>{

  console.log(props);
  return(
    <div className="checkBoxText">
      <h2>{props.title}</h2>
      {
        props.items.map((item, index)=>{
          return <li key={index}><input type="checkbox" checked={item.completed}/> {item.name}</li>
        })
      }
    </div>
  )
};

export default Todos;
