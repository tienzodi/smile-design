import React, { Component } from 'react';
import {fabric} from 'fabric';

import dataTemplate from "../../../resources/templates/template-1/config.json";

import styles from './style.css';

const sampleImage = require('../../../resources/images/human.png');

class Workspace extends Component {
	constructor() {
		super();

		this.canvas = null;
	}

	saveRef = (ref) => this.containerNode = ref

	componentDidMount() {
		let canvas = new fabric.Canvas('workspace', { selection: true });      
		canvas.setHeight(1000);
		canvas.setWidth(800);

		this.canvas = canvas;

		this.renderPatientImage();
		this.renderTeethTemplate();
	}

	renderPatientImage() {
		var canvas = this.canvas;

		fabric.Image.fromURL(sampleImage, function(img) {
			img.selectable = false;
			img.scaleToWidth(800);
			canvas.add(img);
		});

		canvas.renderAll();      
	}

	renderTeethTemplate() {
		const templatePath = '../resources/templates/template-1';
		let data = dataTemplate.data;
		let canvas = this.canvas;

		data.forEach(element => {
			fabric.Image.fromURL(`${templatePath}/${element.name}`, function(img) {
				img.set({
				  left: element.left,
				  top: element.top,
				  angle: element.angle
				});

				img.scaleToWidth(element.width);
		  
				img.perPixelTargetFind = true;
				img.targetFindTolerance = 4;
				img.hasControls = img.hasBorders = true;
		  
				canvas.add(img);
			});
		});

	}

	render() {
		return (
			<div ref={this.saveRef} className="repoDetailInner">
				<canvas className={styles.workspace} id="workspace"></canvas>
			</div>
		);
	}
}

export default Workspace;
