const Checkbox = (props) => {
	const {label, onChange} = props;
	return (
		<>
		<label>{label}
		<input type="checkbox" onChange={onChange}
		/>
		</label>
		</>
	)
}

export default Checkbox;
