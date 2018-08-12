import React, { Component } from 'react';
import {fabric} from 'fabric'


class Workspace extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		let canvas = new fabric.Canvas('workspace', {
			backgroundColor: 'red',
			selectionColor: 'blue',
			selectionLineWidth: 2
		});           
	}


	render() {
		return (
			<div className="repoDetailInner">
				<canvas id="workspace"></canvas>
			</div>
		);
	}
}

export default Workspace;
