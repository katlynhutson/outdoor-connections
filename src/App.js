import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
	return (
		<>
			<h1>Outdoor Connections</h1>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
