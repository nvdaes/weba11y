const Aside = () => {
	return (
		<>
		<aside aria-labelledby="asideAccessibilityInfo">
		<h2 id="asideAccessibilityInfo">Información adicional sobre accesibilidad</h2>
		<ul>
		<li><a href="https://www.w3.org/WAI" hrefLang="en" target="_blank"
		rel="noopener noreferrer"><abbr title="Web Accessibility Initiative">WAI</abbr> (abre nueva ventana)</a></li>
		<li> <a href="https://daisy.org" target="_blank"
		rel="noopener noreferrer">Consorcio <abbr title="Digital Accessible Information System">DAISY</abbr> (abre nueva ventana)</a></li>
		<li> <a href="https://edrlab.org" target="_blank"
		rel="noopener noreferrer"><abbr title="European Digital Reading Lab">EDRLab</abbr> (abre nueva ventana)</a></li>
		</ul>
		</aside>
		</>
	);
}

export default Aside;
