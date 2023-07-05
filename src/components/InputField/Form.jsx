import Input from './Input';

const Form = () => {
	return (
		<form className="Form">
			<Input label="day" />
			<Input label="month" />
			<Input label="year" />
		</form>
	);
};

export default Form;
