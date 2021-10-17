import * as React from 'react';
import './index.css'
import Input from './Input'


export default function Card() {

	return (
		
		<div className="card"><div className="cardHeader"><h1>Login</h1></div><div className="cardBody"><h3><Input label="email"/></h3></div></div>
	)
}
