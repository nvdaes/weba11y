import ExternalLink from '../single/externalLink';

const Navigable = () => {
	return (
		<>
		<h3>Pauta 2.4. <ExternalLink href="https://www.w3.org/TR/WCAG21/#navigable" contents="Navegable" /></h3>
		<blockquote>
		<p>Ofrece formas de ayudar a los usuarios a navegar, encontrar contenido y determinar dónde están.</p>
		</blockquote>
		<p>Esta pauta incluye criterios que generalmente se aplican a conjuntos de documentos o páginas web, y otros aplicables a páginas y documentos individuales.</p>
		<p>Aquí nos centraremos en señalar criterios que podamos comprobar en esta página individual. Podemos encontrar ejemplos aplicables a conjuntos de páginas o documentos en la <a href="https://nvdaes.github.io" hrefLang="es">web de la comunidad hispanohablante de <abbr title="Non Visual Desktop Access">NVDA</abbr></a>. En concreto:</p>
		<ul>
		<li>Es posible omitir la lectura de bloques repetidos.</li>
		<li>Existe más de una forma de encontrar una página en el sitio web (por ejemplo, enlaces y un buscador).</li>
		<li>Se ofrece información sobre la ubicación dentro del sitio web.</li>
		</ul>
		</>
	)
}

export default Navigable;
