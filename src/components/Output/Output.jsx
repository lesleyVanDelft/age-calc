const Output = ({ days, months, years }) => {
	return (
		<main className="Output">
			<p>
				<span className="accent">{years}</span> years
			</p>
			<p>
				<span className="accent">{months}</span> months
			</p>
			<p>
				<span className="accent">{days}</span> days
			</p>
		</main>
	);
};

export default Output;
