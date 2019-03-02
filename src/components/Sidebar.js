import React, { Component } from 'react';
import {data} from '../data';
import NavigationLink from './NavigationLink';


const Sidebar = (props) => {

	return (
		<div className="sidebar col-md-2 border-right p-3">
			{props.children}
			<div className="logo p-2 mb-3">SalesBOOST</div>
                <div className="navigation">
                  <nav>
                    {data[props.links].map(x => <NavigationLink name={x.title} icon={x.icon}/>)}
                  </nav>
              </div>
		</div>
	)
}


export default Sidebar;