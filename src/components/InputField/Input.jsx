const Input = ({ label }) => {
	return (
		<div className="Input">
			<label htmlFor={label}>{label}</label>
			<input type="number" name={label} id={label} />
		</div>
	);
};

export default Input;
