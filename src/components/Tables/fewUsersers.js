import React, { Component } from "react";

import Table from "./customTable";
import { Link } from "react-router-dom";

export default class eventListTable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [
			{
				name: "John David",
				email: "codeuiandy@gmail.com",
				joned: "Paid",
				registrationDate:"21/02/2020",
                recentActivity:"21/02/2020"
			},
			{
				name: "Anita Joe",
				email: "codeuiandy@gmail.com",
				joned: "Paid",
				registrationDate:"21/02/2020",
                recentActivity:"21/02/2020"
			},
			{
				name: "Binta ligas",
				email: "codeuiandy@gmail.com",
				joned: "Paid",
				registrationDate:"21/02/2020",
                recentActivity:"21/02/2020"
			},
			{
				name: "Adedayo Manfo",
				email: "codeuiandy@gmail.com",
				joned: "Paid",
				registrationDate:"21/02/2020",
                recentActivity:"21/02/2020"
			},
			{
				name: "Binta ligas",
				email: "codeuiandy@gmail.com",
				joned: "Paid",
                registrationDate:"21/02/2020",
                recentActivity:"21/02/2020"
			},
		];
		const body = datas.map((data, index) => ({
			name: data.name,
			email: data.email,

			joned: data.joned,
			
			registrationDate: data.registrationDate,
            recentActivity:data.recentActivity,
			action: (
				<a>
					<Link to="/view_event">
						{" "}
						<span
							className="edit"
							style={{ color: " #0D0D0D", fontSize: "14px" }}
							// onClick={() => this.props.handleEdit(data.id)}
							// data-backdrop="static"
							className="fa fa-eye mr-4 add-cursor"
						></span>
					</Link>

					<Link to="">
						{" "}
						<span
							className="edit"
							style={{ color: " #0D0D0D", fontSize: "14px" }}
							// onClick={() => this.props.handleEdit(data.id)}
							// data-backdrop="static"
							className="fa fa-eraser mr-4 add-cursor"
						></span>
					</Link>
				


					<span
						style={{ color: " #F00A0A", fontSize: "14px",cursor:"pointer" }}
					
						// onClick={() => this.props.handleDelete(data.id)}
						className="fa fa-trash mr-4 add-cursor"
						data-toggle="modal" data-target="#ComfirmModal"
					></span>
				</a>
			),
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Name (filterable)",
				prop: "name",
				sortable: true,
				filterable: true,
			},
			

			{ title: "Email", prop: "email" },

			{ title: "joned", prop: "joned" },

            { title: "Locaton", prop: "registrationDate" },
            	{ title: "Recent Activity", prop: "recentActivity" },

			{ title: "Actions", prop: "action" },
		];
		return header;
	};

	render() {
		return (
			<div className="table-responsivee">
				<Table
					body={this.bodyRow}
					head={this.header}
					rowsPerPage={3}
					rowsPerPageOption={[10, 15,  25]}
				/>
			</div>
		);
	}
}
