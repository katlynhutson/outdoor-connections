import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Attendance from './components/Attendance';
import Blog from './components/Blog';
import Camping from './components/Camping';
import Donations from './components/Donations';
import Fit2Hike from './components/Fit2Hike';
import Guidlines from './components/Guidlines';
import LNT from './components/LNT';
import Pace from './components/Pace';
import Supplies from './components/Supplies';
import TeamLeaders from './components/TeamLeaders';
import TrailRules from './components/TrailRules';
import Waiver from './components/Waiver';

import './style/home.css';

function App() {
	return (
		<>
			<header>
				<Nav />
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/attendance' element={<Attendance />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/camping' element={<Camping />} />
				<Route path='/donations' element={<Donations />} />
				<Route path='/fit2hike' element={<Fit2Hike />} />
				<Route path='/guidelines' element={<Guidlines />} />
				<Route path='/lnt' element={<LNT />} />
				<Route path='/pace' element={<Pace />} />
				<Route path='/supplies' element={<Supplies />} />
				<Route path='/teamleaders' element={<TeamLeaders />} />
				<Route path='/trailrules' element={<TrailRules />} />
				<Route path='/waiver' element={<Waiver />} />
			</Routes>
		</>
	);
}

export default App;
