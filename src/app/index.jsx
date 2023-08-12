import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './styles';
import { Generator, Home } from '../pages';

const App = () => {
	return (
		<Wrapper>
			{/* Navbar */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/generate' element={<Generator />} />
			</Routes>
			{/* Footer */}
		</Wrapper>
	);
};

export default App;
