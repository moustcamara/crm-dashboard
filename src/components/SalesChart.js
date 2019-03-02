import React, { Component } from 'react';
import 'chartist';
import ChartistGraph from 'react-chartist';
import {data} from '../data';

const SalesChart = (props) => {

	const sales = [];

	data.orders
			.filter(x => parseInt(x["Amount"].replace("$", "")) > 0)
            	.map(c => sales.push(
            				parseInt(c["Amount"].replace("$", ""))
            			  ) 
            		)

	const chartInfo = {}

	 chartInfo.data = {
      labels: [1,2,3,4,5,6,7,8,9,10],
      series: [[300,215,20,10,88,65,400,150,60,250]] //sales.filter((c,i)=>i<100)
    };

    chartInfo.options = {
      high: 400, //sales.sort((a,b) => b - a)[0],
      low: 0,
      showArea: true
    };
 
    chartInfo.type = 'Line';

	return (		

		<div className="container">
			 <ChartistGraph data={chartInfo.data} options={chartInfo.options} type={chartInfo.type} />
		</div>

	)
}


export default SalesChart;



