import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';


const theme = {
	red: '#ff0000',
	black: '#393939',
	grey: '#3a3a3a',
	lightgrey: '#e1e1e1',
	offwhite: '#ededed',
	maxwidth: '1000px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}

const StyledPage = styled.div`
	background: #fff;
	color: ${props => props.theme.black};
`;

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	background: ${props => props.theme.red};
	margin: 0 auto;
	padding; 2rem;
`;

class Page extends Component {
	render () {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>
						{this.props.children}					
					</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
