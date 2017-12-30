import React, { Component } from "react";


class PlayerProfiles extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const { tasks, onDelete, key, content } = this.props;
	}
}