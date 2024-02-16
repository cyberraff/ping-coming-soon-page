import {} from 'react';
import './App.css';
import HeaderForm from './components/HeaderForm';
import Image from './components/Image';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<div className='px-[1rem]'>
				<HeaderForm />
				<Image />
			</div>
			<Footer />
		</>
	);
}

export default App;
