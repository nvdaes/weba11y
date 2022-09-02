import ExternalLink from '../single/externalLink';

const Header = () => {
	return (
		<>
		<header>
		<h1>Evaluación de accesibilidad conforme a WCAG 2.1</h1>
		<p>Esta web proporciona información y elementos interactivos para comprobar el efecto de cumplir con ciertos criterios de las WCAG 2.1.</p>
		<p>Se trata de un proyecto personal que no está apoyado por ninguna entidad y puede contener información errónea o imprecisa. Si crees que puede mejorarse, coméntalo en GitHub.</p>
		<p>Las <ExternalLink href="https://www.w3.org/TR/WCAG21" contents="WCAG 2.1" /> son una recomendación del W3C y pueden ser utilizadas como material de referencia o citadas en otros documentos.</p>
			<p>También se han consultado documentos mencionados en las WCAG 2.1 y otras publicaciones del W3C, como queda reflejado en los enlaces de esta web.</p>
			</header>
		</>
	);
}

export default Header;
