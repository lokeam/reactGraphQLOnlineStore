import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
  	padding: 0.5rem 1rem;
  	background: ${props => props.theme.red};
  	color: #fff;
  	text-transform: uppercase;
  	text-decoration: none;
  }

  @media (max-width: 1200px ) {
  	margin: 0;
  	text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
  	border: 0 0 10px solid ${props => props.theme.black};
  	display: grid;
  	grid-tempate-columns: auto 1fr;
  	justify-content: space-between;
  	align-items: stretch;

  	@media(max-width: 1200px) {
  		grid-tempate-columns: 1fr;
  		justify-content: center;
  	}
  .sub-bar {
    display: grid;
    grid-tempate-columns: 1fr auto;
    border: 0 0 1px solid ${props => props.theme.lightgrey}; 
    }
  }
`;

const Header = () => (
	<div className="header">
		<div className="bar">
			<Logo>
				<Link>
					<a href="">Test site</a>					
				</Link>
			</Logo>
			<Nav />
		</div>
		<div className="sub-bar">
			<p>Search</p>
		</div>
		<div>Cart</div>
	</div>
);

export default Header;
