import React, { Component } from 'react';


const NavigationLink = (props) => {

	return (
		 <li className="navigation__link py-1 px-2 mb-2 rounded"><a href="#"><i className={'fa ' + props.icon + ' mr-2'}></i><span>{props.name}</span></a></li>
	)
}


export default NavigationLink;