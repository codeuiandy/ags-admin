// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class Statictics extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			series: [
// 				{
// 					name: "Desktops",
// 					data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
// 					style: {
// 						background: "#00E396",
// 					},
// 				},
// 			],
// 			options: {
// 				chart: {
// 					height: 350,
// 					type: "line",
// 					zoom: {
// 						enabled: false,
// 					},
// 				},
// 				dataLabels: {
// 					enabled: false,
// 				},
// 				stroke: {
// 					curve: "straight",
// 				},

// 				grid: {
// 					row: {
// 						colors: ["red", "green"], // takes an array which will be repeated on columns
// 						opacity: 0.5,
// 					},
// 				},

// 				colors: ["black", "pink"],
// 				dataLabels: {
// 					enabled: false,
// 				},
// 				xaxis: {
// 					categories: [
// 						"Jan",
// 						"Feb",
// 						"Mar",
// 						"Apr",
// 						"May",
// 						"Jun",
// 						"Jul",
// 						"Aug",
// 						"Sep",
// 					],
// 				},
// 			},
// 		};
// 	}

// 	render() {
// 		return (
// 			<div className="Statictics">
// 				<div className="row">
// 					<div className="mixed-chart">
// 						<Chart
// 							options={this.state.options}
// 							series={this.state.series}
// 							type="line"
// 							width="80%"
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Statictics;

// import React, { useEffect, useState } from "react";

// import { Line } from "react-chartjs-2";

// export const Statictics = () => {
// 	const [totalpaymentChart, setTotalPaymentChart] = useState({});
// 	const [attendeeChart, setattendeeChart] = useState({});
// 	const chartTotalPayment = () => {
// 		setTotalPaymentChart({
// 			labels: ["Regular", "Exhibitor", "Media", "Organization"],
// 			datasets: [
// 				{
// 					label: ["Payment Chart"],
// 					data: [100, 80, 70, 60],
// 					backgroundColor: ["#1E9682", " #66BAED", "#FBD11F", "#F74F4F"],
// 					borderWidth: 4,
// 					fill: false,
// 				},
// 			],
// 		});
// 	};
// 	const attendeeCharts = () => {
// 		setattendeeChart({
// 			labels: ["Avalable Attendies"],
// 			datasets: [
// 				{
// 					data: [20],
// 					backgroundColor: ["#CC2E43"],
// 					borderWidth: 1,
// 				},
// 			],
// 		});
// 	};
// 	useEffect(() => {
// 		chartTotalPayment();
// 	}, []);

// 	return (
// 		<>
// 			<div id="app">
// 				<Line
// 					// width={100}
// 					// height={100}
// 					data={totalpaymentChart}
// 					options={{
// 						responsive: true,
// 						legend: {
// 							display: false,
// 						},

// 						scales: {
// 							yAxes: [
// 								{
// 									ticks: {
// 										beginAtZero: true,
// 									},
// 								},
// 							],
// 						},
// 					}}
// 				/>
// 			</div>
// 		</>
// 	);
// };

import React from "react";
import { Line as LineChart } from "react-chartjs-2";

function chartData() {
	return {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "New Users",

				data: [65, 59, 80, 81, 56, 80, 90, 100],
				fill: false,
				backgroundColor: "#1E9682",
				borderColor: "#FDAD00",
				pointStyle: "rectRounded",
			},
			{
				label: "Reported Users",

				fill: false,
				color: ["#1E9682"],
				borderColor: "#D93025",
				data: [8, 28, 40, 19, 6, 27, 40],
			},

			{
				label: " Affiliate Members ",

				fill: false,
				color: ["#1E9682"],
				borderColor: "#4267B2",
				data: [30, 46, 40, 15, 60, 67, 70],
			},
		],
	};
}

const options = {
	responsive: true,
};

class Statictics extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: chartData(),
		};
	}

	render() {
		return (
			<div className="responsiveChart">
				{" "}
				<LineChart data={this.state.data} />
			</div>
		);
	}
}

export default Statictics;