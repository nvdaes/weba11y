import ExternalLink from '../single/externalLink';
import Note from '../single/note';
import ExportNotes from '../complex/exportNotes';

import { Wcag } from '../single/abbrs';

const Header = () => {
	return (
		<>
		<header>
		<h1>Evaluación de accesibilidad conforme a <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1</h1>
		<p>Esta web proporciona información y elementos interactivos para comprobar el efecto de cumplir con ciertos criterios de las <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1.</p>
		<p>Se trata de un proyecto personal que no está apoyado por ninguna entidad y puede contener información errónea o imprecisa. Si crees que puede mejorarse, usa alguno de los medios de contacto que encontrarás al final de esta página para dejar tus comentarios.</p>
		<p>Las <ExternalLink href="https://www.w3.org/TR/WCAG21" contents={<Wcag />} /> son una recomendación del <abbr title="World Wide Web Consortium">W3C</abbr> y pueden ser utilizadas como material de referencia o citadas en otros documentos.</p>
		<p>Además de estas pautas, se han consultado otras publicaciones del <abbr title="World Wide Web Consortium">W3C</abbr>, como queda reflejado en los enlaces de esta web, y la <a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf">EN 301 549 V3.2.1 en inglés (abre <abbr title="Portable Document Format">PDF</abbr> con posibles dificultades de accesibilidad)</a>.</p>
		<p>Para empezar, consulta información y descarga <abbr title="Non Visual Desktop Access">NVDA</abbr> desde la <ExternalLink href="https://www.nvaccess.org" contents="web de NV Access" />.</p>
		<p><abbr title="Non Visual Desktop Access">NVDA</abbr> puede descargarse de forma gratuita. Sin embargo, su desarrollo conlleva gastos y posibilita el acceso a la tecnología, mediante un lector de pantalla de código abierto en el que la comunidad puede colaborar, a personas desfavorecidas por su situación socioeconómica y, en general, a cualquier persona que lo necesite. Si puedes, dona a NV Access.</p>
		<p>Usa los controles de esta web etiquetados con la palabra &quot;nota&quot; para añadir comentarios a distintas secciones. Por ejemplo, tal vez quieras comentar comandos, procedimientos para evaluar las distintas pautas, etc. Las notas se podrán editar y se almacenarán automáticamente en el navegador, de modo que seguirán disponibles para la siguiente sesión. En el exterior de cada nota se indicará si tiene o no un comentario añadido.</p>
		<p>También es posible <ExportNotes />.</p>
		<Note id="general" label="empezar" />
		</header>
		</>
	);
}

export default Header;
