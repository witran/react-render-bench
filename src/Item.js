import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		if (!this.inited) {
			window.requestAnimationFrame(() =>
				this.setState({
					text: 'Donec vestibulum quis urna cursus fermentum. Proin ipsum mauris, egestas vitae vulputate vitae, gravida a sapien. Vivamus tempor suscipit elit, ac bibendum velit tempor vel. Morbi vel varius eros, eget lobortis velit. Sed eleifend euismod augue sed rhoncus. Fusce ullamcorper mi gravida ante vulputate aliquam. Pellentesque faucibus, erat at viverra accumsan, nulla quam fermentum leo, nec varius metus nulla sit amet enim. Nullam a eros eu purus iaculis volutpat a eu mi. Cras vel finibus arcu, non porta orci. Nam porta sagittis convallis. Aenean porta maximus odio elementum venenatis. Sed congue augue ac urna pharetra, at finibus libero imperdiet. Proin ornare sodales ex, sed tristique lectus pretium et. Pellentesque molestie odio quis imperdiet fringilla. Aenean aliquet iaculis tortor, id molestie neque luctus vitae. Sed interdum arcu magna, quis rhoncus nisi bibendum eget. Nunc ac diam in risus hendrerit bibendum vitae eu turpis. Integer egestas lacinia tempus. Nam dapibus lorem nibh. Suspendisse neque mi, suscipit quis rhoncus fermentum, vestibulum faucibus orci.'
				}));
			this.inited = true;
			return null;
		}
		return (
			<div className='text'>
				{this.state.text}
			</div>
		);
	}
}

export default Item;
