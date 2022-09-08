import Header from './components/landmarks/header';
import Navigation from './components/landmarks/navigation';
import Main from './components/landmarks/main';
import Aside from './components/landmarks/aside';
import Footer from './components/landmarks/footer';

import './App.css';

function App() {
	return (
	<>
		<div className="App">
		<Header className="App-header" />
		<Navigation />
		<Main />
		<Aside />
		<Footer />
		</div>
	</>
	);
}

export default App;
