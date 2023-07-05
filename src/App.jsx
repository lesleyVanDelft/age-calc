import Button from './components/Button';
import Container from './components/Container';
import Form from './components/InputField/Form';
import Output from './components/Output/Output';
// import './dist/index.css';
import './styles/index.scss';

function App() {
	return (
		<Container>
			<Form />
			<Output days={0} months={0} years={0} />
		</Container>
	);
}

export default App;
