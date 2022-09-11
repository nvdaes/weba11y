import ExternalLink from '../single/externalLink';
import Note from '../single/note';

const Header = () => {
	return (
		<>
		<header>
		<h1>Evaluación de accesibilidad conforme a <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1</h1>
		<p>Esta web proporciona información y elementos interactivos para comprobar el efecto de cumplir con ciertos criterios de las <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1.</p>
		<p>Se trata de un proyecto personal que no está apoyado por ninguna entidad y puede contener información errónea o imprecisa. Si crees que puede mejorarse, usa alguno de los medios de contacto proporcionados al final de esta página para dejar tus comentarios.</p>
		<p>Las <a href="https://www.w3.org/TR/WCAG21"><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 (abre nueva ventana)</a> son una recomendación del <abbr title="World Wide Web Consortium">W3C</abbr> y pueden ser utilizadas como material de referencia o citadas en otros documentos.</p>
		<p>Además de estas pautas, se han consultado otras publicaciones del <abbr title="World Wide Web Consortium">W3C</abbr>, como queda reflejado en los enlaces de esta web, y la <ExternalLink href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf" contents="EN 301 549 V3.2.1 en inglés" />.</p>
		<p>Para empezar, consulta información y descarga <abbr title="Non Visual Desktop Access">NVDA</abbr> desde la <ExternalLink href="https://www.nvaccess.org" contents="web de NV Access" />.</p>
		<p>Puedes usar los controles etiquetados con la palabra &quot;nota&quot; para añadir comentarios a distintas secciones. Por ejemplo, puede resultar útil comentar comandos, procedimientos para evaluar las distintas pautas, etc. Las notas se podrán editar y se almacenarán automáticamente en el navegador, de modo que seguirán disponibles para la siguiente sesión. En el exterior de cada nota se indicará si tiene o no un comentario añadido.</p>
		<Note id="general" label="empezar" />
		</header>
		</>
	);
}

export default Header;
