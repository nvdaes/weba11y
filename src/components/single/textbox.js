const Textbox = (props) => {
	const {label, value, ariaLabel, onChange} = props;
	return (
		<>
		<label>{label}
		<input type="text" value={value} aria-label={ariaLabel} onChange={onChange}
		/>
		</label>
		</>
	)
}

export default Textbox;
