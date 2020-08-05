import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion"
export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			SidebarDefault: "SidebarDefault",
			sidebarShow: "",
			showBar: false,
		};
		console.log(this.props)
	}
	toggleSideBar = () => {
		let showBar = this.state.showBar;
		if (this.state.showBar === false) {
			this.setState({
				SidebarDefault: "",
				sidebarShow: "showSidebar",
				showBar: !showBar,
			});
		} else {
			this.setState({
				SidebarDefault: "",
				sidebarShow: "hideSidebar",
				showBar: !showBar,
			});
		}
	};

	
	render() {
		const variants = {
			hidden: { opacity: 0.3,translateX:100 },
			visible: { opacity: 1,translateX:0},
		  }
		  const spring = {
			type: "spring",
			stiffness: 80,
			damping: 8
		  };
		let { SidebarDefault, sidebarShow } = this.state;
		return (
			<div>
				<div>
					<Navbar handleSideBar={this.toggleSideBar} />
					<Sidebar activepage={this.props.activepage} page={this.props.page} sidebarShow={sidebarShow} SidebarDefault={SidebarDefault} />
					<div className="centra-margin">
					<motion.div    initial="hidden"
    animate="visible"
    variants={variants} transition={spring}>
	{this.props.children}
						</motion.div>
						
					
						</div>
				</div>
			</div>
		);
	}
}
