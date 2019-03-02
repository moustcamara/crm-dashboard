import React, { Component } from 'react';
import {data} from '../data';

let revenue = data.orders
				.filter(x => parseInt(x["Amount"].replace("$", "")) > 0)
	            	.reduce((acc,cur) => {return acc + parseInt(cur["Amount"].replace("$", ""))}, 0)

let profit = data.orders
				.filter(x => parseInt(x["Profit"].replace("$", "")) > 0)
	            	.reduce((acc,cur) => {return acc + parseInt(cur["Profit"].replace("$", ""))}, 0)

let fees = revenue - profit;

const SummaryCardSingle = (props) => {

	return (
		<div className="summary-cards__card col-md-3">
	          <div className="border p-3 rounded shadow-sm">
	            <div className="summary-cards__card-heading row">
	              <div className="summary-cards__card-title col-md-8"><span>{props.title}</span></div>
	               <div className="summary-cards__card-icon col-md-4 text-right"><i className="text-muted fa fa-shopping-cart"></i></div>
	            </div>
	            <div className="summary-cards__card-stat text-center p-3">
	            	<span>
	            		{props.title == 'Sales' && data.orders.length}
	            		{props.title == 'Revenue' && 
	            			'$' + revenue.toString()
	            		}
	            		{props.title == 'Profit' && 
	            			'$' + profit.toString()
	            		}
	            		{props.title == 'Fees' && 
	            			'$' + fees.toString()
	            		}
	            	</span>
	            </div>
	          </div>
	     </div>
	)
}


export default SummaryCardSingle;