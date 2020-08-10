import React, { Component } from "react";

import Table from "./customTable";
import { Link } from "react-router-dom";

export default class GroupTable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [

			{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "Cornwall Hippos",
			
			},

			{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "Cornwall Hippos",
			
			},

			{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: "Close",
				posts: "Cornwall Hippos",
			
			},	{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: "Close",
				posts: "Cornwall Hippos",
			
			},	{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "Cornwall Hippos",
			
			},	{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: "Close",
				posts: "Cornwall Hippos",
			
			},
			{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "Cornwall Hippos",
			
			},
			{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "Cornwall Hippos",
			
			},
			{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "Cornwall Hippos",
			
			},
			{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe:<a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "Cornwall Hippos",
			
			},
			{
				groupname: "Book club",
				Createdby: "New York Cockroaches",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "Cornwall Hippos",
			
			},

			
		];
		const body = datas.map((data, index) => ({
			groupname: data.groupname,
			Createdby: data.Createdby,

			openORclsoe: data.openORclsoe,
			posts: data.posts,
			location: data.location,

		
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Group Name (filterable)",
				prop: "groupname",
				sortable: true,
				filterable: true,
			},
			{ title: "Created By (filterable)", prop: "Createdby" ,
			sortable: true,
			filterable: true,},

			{ title: "Open/Close ", prop: "openORclsoe" ,
			},

			{ title: "Posts", prop: "posts" ,
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
