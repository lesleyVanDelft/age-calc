import Input from './Input';
import arrowIcon from '../../assets/icon-arrow.svg';
const Form = () => {
	return (
		<form className="Form">
			<Input label="day" />
			<Input label="month" />
			<Input label="year" />
			<button type="submit" className="Form__button">
				<img src={arrowIcon} alt="adsf" />
			</button>
		</form>
	);
};

export default Form;
