import ExternalLink from '../single/externalLink';
import Note from '../single/note';

const TextAlternatives = () => {
	return (
		<>
		<h3 id="textAlternatives"><ExternalLink href="https://www.w3.org/TR/WCAG21/#text-alternatives" contents="Pauta 1.1. Alternativas de texto" /></h3>
		<Note id="textAlternatives" label="Alternativas de texto:" />
		<blockquote>
		<p>Proporciona alternativas de texto para cualquier contenido no textual de modo que pueda ser transformado en otras modalidades que la gente necesite, como impresión ampliada, braille, voz, símbolos o lenguaje sencillo.</p>
		</blockquote>
		</>
	)
}

export default TextAlternatives;
