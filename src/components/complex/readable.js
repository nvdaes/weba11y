import ExternalLink from "../single/externalLink";
import Note from '../single/note';

const Readable = () => {
	return (
		<>
		<h3 id="readable">Pauta 3.1. <ExternalLink href="https://www.w3.org/TR/WCAG21/#readable" contents="Legible" /></h3>
		<Note id="readable" label="Legible:" />
		<blockquote>
		<p>Haz que el texto sea legible y comprensible.</p>
		</blockquote>
		<p>Los criterios de esta pauta, en resumen, establecen que:</p>
		<ul>
		<li>El idioma de la página y de partes de la página debe definirse de forma que pueda ser interpretado por distintas herramientas tecnológicas.</li>
		<li>Existirá un mecanismo para identificar definiciones de expresiones que no se usen de un modo habitual, y para identificar la forma ampliada o el significado de abreviaciones.</li>
		<li>Se proporcionará ayuda para entender el contenido cuando se requiera un nivel de comprensión lectora superior al adquirido en la enseñanza secundaria inferior.</li>
		<li>Existirá un mecanismo para identificar la pronunciación de palabras cuando esto pueda evitar ambigüedades sobre su significado.</li>
		</ul>
		<p>Veamos cómo pueden afectar los criterios relativos al idioma.</p>
		</>
	)
}

	export default Readable;
