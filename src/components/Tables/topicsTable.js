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
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},

			{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},

			{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: "Close",
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},	{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: "Close",
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},	{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},	{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: "Close",
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},
			{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},
			{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},
			{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},
			{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe:<a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},
			{
				topicName: "Ladies Talk",
				Createdby: "Ade John",
				openORclsoe: <a style={{color:"#2ED47A",fontWeight:"400"}}>Open</a>,
				posts: "http://example.com/?bells=baseball&agreement=bird",
			
			},

			
		];
		const body = datas.map((data, index) => ({
			topicName: data.topicName,
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
				title: "Topic Name (filterable)",
				prop: "topicName",
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
