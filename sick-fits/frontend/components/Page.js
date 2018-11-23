import React, { Component } from 'react';
import Header from '../components/Header';

class Page extends Component {
	render () {
		return (
			<div>
				<Header />
				<p>Hey, I'm the Page Component</p>
				{this.props.children}
			</div>
		);
	}
}

export default Page;
