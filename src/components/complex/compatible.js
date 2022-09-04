import ExternalLink from "../single/externalLink";

const Compatible = () => {
	return (
		<>
		<h3>Pauta 4.1. <ExternalLink href="https://www.w3.org/TR/WCAG21/#compatible" contents="Compatible" /></h3>
		<blockquote>
		<p>Maximiza la compatibilidad con agentes de usuario actuales y futuros, incluidas las tecnologías de apoyo.</p>
		</blockquote>
		<p>En resumen, los criterios de esta pauta establecen lo siguiente:</p>
		<ul>
		<li>El contenido se implementará de acuerdo a las especificaciones correspondientes si se usan lenguajes como <abbr title="Hypertext Markup Language">HTML</abbr>.</li>
		<li>El nombre, propiedades y valor de los componentes de interfaz de usuario podrá ser interpretado por distintas herramientas tecnológicas. Este criterio se cumple al seguir las especificaciones de <abbr title="Hypertext Markup Language">HTML</abbr>, pero también debe aplicarse a otras tecnologías.</li>
		<li>En contenido implementado mediante lenguajes como <abbr title="Hypertext Markup Language">HTML</abbr>, los mensajes de estado deben poder ser mostrados por las tecnologías de apoyo sin que reciban el foco.</li>
		</ul>
		</>
	)
}

export default Compatible;

