import ExternalLink from '../single/externalLink';
import Note from '../single/note';

const Seizures = () => {
	return (
	<>
	<h3>Pauta 2.3. <ExternalLink href="https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions" contents="Convulsiones y reacciones físicas" /></h3>
	<Note id="seizures" label="Reacciones físicas:" />
	<blockquote>
	<p>No diseñes contenido de modo que se sepa pueda causar convulsiones o reacciones físicas.</p>
	</blockquote>
	<p>Aunque no nos detengamos en los criterios de esta pauta, debemos ser conscientes de su importancia y tener en cuenta que también pueden afectar a personas que usan <abbr title="Non Visual Desktop Access">NVDA</abbr>.</p>
	</>
	)
}

export default Seizures;
