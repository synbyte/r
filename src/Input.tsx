import * as React from 'react';
import './index.css'
import { FormControl, InputGroup } from 'react-bootstrap';

export default function Input(props) {
	return (<InputGroup class='mb-3'><FormControl placeholder={props.place}/></InputGroup>
	)
}