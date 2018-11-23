import Link from 'next/link';

const Home = props => (
	<div>
		<p>Home!</p>
		<p>
			<Link href="/sell">
				<a>Sell</a>
			</Link>
		</p>
	</div>
);

export default Home;
