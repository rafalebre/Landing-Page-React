import React from "react";

export const Cards = (props) => {
	return (
		<div className="col">
        <div className="card text-center">
        <img className={props.image} src="https://via.placeholder.com/500x325.png?text=Placeholder" alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <hr/>
        <a href="#" className="btn btn-primary">{props.button}</a>
  </div>
</div>
</div>
	)
}
