import ExternalLink from "../single/externalLink";
import Note from '../single/note';

const InputModalities = () => {
	return (
		<>
		<h3 id="inputModalities">Pauta 2.5. <ExternalLink href="https://www.w3.org/TR/WCAG21/#input-modalities" contents="Modalidades de entrada" /></h3>
		<Note id="inputModalities" label="Modalidades de entrada:" />
		<blockquote>
		<p>Facilita a los usuarios el manejo de la funcionalidad mediante diferentes entradas más allá del teclado.</p>
		</blockquote>
		<p>Aunque debemos considerar todos los criterios de esta pauta, aquí nos detendremos en el relativo a &quot;etiquetas en nombre&quot;, ya que <abbr title="Non Visual Desktop Access">NVDA</abbr> puede resultar especialmente útil para comprenderlo y determinar si el contenido de una web o documento se ajusta a este requisito.</p>
		</>
	)
}

export default InputModalities;

