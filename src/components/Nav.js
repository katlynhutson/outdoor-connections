import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/attendance'>Attendance</Link>
				</li>
				<li>
					<Link to='/blog'>Blog</Link>
				</li>
				<li>
					<Link to='/camping'>Camping</Link>
				</li>
				<li>
					<Link to='/donations'>Donations</Link>
				</li>
				<li>
					<Link to='/fit2hike'>Fit 2 Hike</Link>
				</li>
				<li>
					<Link to='/guidelines'>Guidelines</Link>
				</li>
				<li>
					<Link to='/lnt'>Leave No Trace</Link>
				</li>
				<li>
					<Link to='/pace'>Pace</Link>
				</li>
				<li>
					<Link to='/supplies'>Supplies</Link>
				</li>
				<li>
					<Link to='/teamleaders'>Team Leaders</Link>
				</li>
				<li>
					<Link to='/trailrules'>Trail Rules</Link>
				</li>
				<li>
					<Link to='/waiver'>Waiver</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
