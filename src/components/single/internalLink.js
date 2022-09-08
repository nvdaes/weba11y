const InternalLink = (props) => {
	const { href, contents } = props;
	return (
		<a
			href={href} >{contents}</a>
	)
}

export default InternalLink;
