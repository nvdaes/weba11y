const Wcag = (props) => {
	const { version } = props;
	return (
		<>
		<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> {version}
		</>
	)
}

Wcag.defaultProps = {
	version: "2.1"
}

const Nvda = () => {
	return (
	<>
		<abbr title="Non Visual Desktop Access">NVDA</abbr>
		</>
	)
}

export { Wcag, Nvda };

