import ExternalLink from '../single/externalLink';

const Header = () => {
	return (
		<>
		<header>
		<h1>Evaluación de accesibilidad conforme a <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1</h1>
		<p>Esta web proporciona información y elementos interactivos para comprobar el efecto de cumplir con ciertos criterios de las <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1.</p>
		<p>Se trata de un proyecto personal que no está apoyado por ninguna entidad y puede contener información errónea o imprecisa. Si crees que puede mejorarse, usa alguno de los medios de contacto proporcionados al final de esta página para dejar tus comentarios.</p>
		<p>Las <a href="https://www.w3.org/TR/WCAG21"><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 (abre nueva ventana)</a> son una recomendación del <abbr title="World Wide Web Consortium">W3C</abbr> y pueden ser utilizadas como material de referencia o citadas en otros documentos.</p>
		<p>También se han consultado documentos mencionados en las <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 y otras publicaciones del <abbr title="World Wide Web Consortium">W3C</abbr>, como queda reflejado en los enlaces de esta web.</p>
		<p>Para empezar, consulta información y descarga <abbr title="Non Visual Desktop Access">NVDA</abbr> desde la <ExternalLink href="https://www.nvaccess.org" contents="web de NV Access" />.</p>
		</header>
		</>
	);
}

export default Header;
