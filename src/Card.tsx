import * as React from 'react';
import './index.css'
import Butn from "./Butn";
import Input from './Input';

export default function Card(props) {

	return (
		
		<div className="card"><div className="cardHeader"><h1>{props.header}</h1></div><div className="cardBody"><Input place="email"/><Input place='********'/><Butn text='Enter'/></div></div>
	)
}
