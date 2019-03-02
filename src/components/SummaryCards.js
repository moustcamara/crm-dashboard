import React, { Component } from 'react';
import {data} from '../data';
import SummaryCardSingle from './SummaryCardSingle';


const SummaryCards = (props) => {

	return (		

		<div className="summary-cards">
		      <div className="row">

		      	{props.data.split(',').map((c,i) => <SummaryCardSingle title={c.trim()}/>)}		        

		      </div>
		 </div>


	)
}


export default SummaryCards;



