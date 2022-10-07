const LastUpdate = () => {
	const date = new Date(document.lastModified);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return (
		<>
		<p><time datetime={`${year}-${month}-${day}`}>Última actualización: {day}/{month}/{year}</time></p>
		</>
	)
}

export default LastUpdate;