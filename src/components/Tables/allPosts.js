import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';

export default class allUsers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.allUsers.map((data, index) => ({
			name: _.startCase(_.lowerCase(data.name)),
			email:  _.startCase(_.lowerCase(`${data.email}`)),

			postedby: _.startCase(_.lowerCase(`${data.postedby}`)),
			postDate: _.startCase(_.lowerCase(`${data.postDate}`)),
			reported:  _.startCase(_.lowerCase(`${data.reported}`)),
            
			action: (
				<a>

<Link to={`edit-payroll/${data.id}`}>
						{" "}
						<Link to='user_info'>
						<span
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-eye mr-4 add-cursor"
						></span>
						</Link>
						
					</Link>

				
						{" "}
						<span
						style={{fontSize:"14px"}}
							className="edit"
							className="far fa-edit mr-4 add-cursor"
						></span>
					
                          
					<span
					style={{fontSize:"14px"}}
						className="del"
						onClick={() => this.props.deletePayroll(data.id)}
						className="fas fa-ban mr-4 add-cursor"
					></span>

					<span
					style={{fontSize:"14px"}}
						className="del"
						onClick={() => this.props.deletePayroll(data.id)}
						className="fa fa-trash mr-4 add-cursor"
					></span>
	<span
	style={{fontSize:"14px"}}
						className="del"
						onClick={() => this.props.deletePayroll(data.id)}
						className="fas fa-envelope-square mr-4 add-cursor"
					></span>


				</a>
			),
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Item Name (filterable)",
				prop: "name",
				sortable: true,
				filterable: true,
            },
            

            { title: "Posted by", prop: "postedby", sortable: true },

			{ title: "Email", prop: "email", sortable: true },



			{ title: "Posted on", prop: "postDate", sortable: true },

			{ title: "Recent Activity", prop: "reported", sortable: true },
			{ title: "Actions", prop: "action" },
		];
		return header;
	};

	render() {
		return (
			<div className="table-responsive" style={{ overflow: "hidden"}}>
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
