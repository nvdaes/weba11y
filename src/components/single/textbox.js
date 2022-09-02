const Textbox = (props) => {
	const {label, value, onChange} = props;
	return (
		<>
		<label>{label}
		<input type="text" value={value} onChange={onChange}
		/>
		</label>
		</>
	)
}

export default Textbox;
