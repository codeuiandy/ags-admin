import React, { Component } from "react";

import Table from "./customTable";
import { Link } from "react-router-dom";

export default class reporteddreportedFor extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [

			{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},

			{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},

			{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},	{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},	{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},	{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},
			{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},
			{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},
			{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},
			{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon:"12/10/2020",
				dreportedFor: "Spam",
			
			},
			{
				Name: "Adedayo Manfo",
				Email: "codeuuiandy@gmail.com",
				Reportedon: "12/10/2020",
				dreportedFor: "Spam",
			
			},

			
		];
		const body = datas.map((data, index) => ({
			Name: data.Name,
			Email: data.Email,

			Reportedon: data.Reportedon,
			dreportedFor: data.dreportedFor,
			location: data.location,

		
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Name (filterable)",
				prop: "Name",
				sortable: true,
				filterable: true,
			},
			{ title: "Email (filterable)", prop: "Email" ,
			sortable: true,
			filterable: true,},

			{ title: "Reported On", prop: "Reportedon" ,
			},

			{ title: "Rreported For", prop: "dreportedFor" ,
			},

			

		
		];
		return header;
	};

	render() {
		return (
			<div className="table-responsivee">
				<Table
					body={this.bodyRow}
					head={this.header}
					rowsPerPage={10}
					rowsPerPageOption={[10, 15, 20, 25]}
				/>
			</div>
		);
	}
}
