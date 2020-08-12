import React, { Component } from "react";

import Table from "./customTable";
import { Link } from "react-router-dom";

export default class topicsTable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [

			{
				topicName: <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				posts: "81",
			
			},

			{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				posts: "81",
			
			},

			{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				openORclsoe: "Close",
				posts: "81",
			
			},	{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				openORclsoe: "Close",
				posts: "81",
			
			},	{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				posts: "81",
			
			},	{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				openORclsoe: "Close",
				posts: "81",
			
			},
			{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				posts: "81",
			
			},
			{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				posts: "81",
			
			},
			{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				posts: "81",
			
			},
			{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				posts: "81",
			
			},
			{
				topicName:  <Link to="">Technology</Link>,
				Createdby: "Nwachukwu Davis",
				posts: "81",
			
			},

		{	action: (
				<a>

<Link >
						{" "}
						<span
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-eye mr-4 add-cursor"
						></span>
					</Link>

				
                          
					<span
					style={{fontSize:"14px"}}
						className="del"
					
						className="fa fa-trash mr-4 add-cursor"
					></span>



				</a>)}

			
		];
		const body = datas.map((data, index) => ({
			topicName: data.topicName,
			Createdby: data.Createdby,

			openORclsoe: data.openORclsoe,
			posts: data.posts,
			location: data.location,
			action: (
				<a>

<Link to="" >
						{" "}
						<span
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-edit mr-4 add-cursor"
						></span>
					</Link>

				
                          
					<span
					style={{fontSize:"14px"}}
						className="del"
					
						className="fa fa-trash mr-4 add-cursor"
					></span>



				</a>)
		
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Group Name (filterable)",
				prop: "topicName",
				sortable: true,
				filterable: true,
			},
			{ title: "Created By (filterable)", prop: "Createdby" ,
			sortable: true,
			filterable: true,},

			

			{ title: "Posts", prop: "posts" ,
			},

			
			{ title: "Action", prop: "action" ,
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
