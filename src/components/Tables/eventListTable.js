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
				Organizers: "20",
				eventType: "20%",
				date: "20",
				location:"Lagos-Nigeria"
			},
			{
				name: "Anita Joe",
				Organizers: "20",
				eventType: "20%",
				date: "20",
				location:"Lagos-Nigeria"
			},
			{
				name: "Binta ligas",
				Organizers: "20",
				eventType: "20%",
				date: "20",
				location:"Lagos-Nigeria"
			},
			{
				name: "Adedayo Manfo",
				Organizers: "20",
				eventType: "20%",
				date: "20",
				location:"Lagos-Nigeria"
			},
			{
				name: "Binta ligas",
				Organizers: "20",
				eventType: "20%",
				date: "20",
				location:"Lagos-Nigeria"
			},
		];
		const body = datas.map((data, index) => ({
			name: data.name,
			Organizers: data.Organizers,

			eventType: data.eventType,
			date: data.date,
			location: data.location,

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
			{ title: "Organizers", prop: "Organizers" },

			{ title: "Paid/Free", prop: "eventType" },

			{ title: "Date", prop: "date" },

			{ title: "Locaton", prop: "location" },

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
					rowsPerPageOption={[10, 15, 20, 25]}
				/>
			</div>
		);
	}
}
