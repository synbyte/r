import * as React from 'react';
import './index.css'
import Input from './Input'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Card(props) {

	return (
		
		<div className="card"><div className="cardHeader"><h1>{props.header}</h1></div><div className="cardBody"><Input place="email"/><Input place='********'/></div></div>
	)
}
