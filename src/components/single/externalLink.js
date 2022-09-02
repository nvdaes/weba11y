const ExternalLink = (props) => {
	const { href, hrefLang, contents } = props;
	return (
		<a
			href={href} hrefLang={hrefLang} target="_blank"
			rel="noopener noreferrer"
			>{contents} (abre nueva ventana)</a>
	)
}

ExternalLink.defaultProps = {
	hrefLang: "en"
}

export default ExternalLink;
