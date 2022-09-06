import ExternalLink from "../single/externalLink";

const IdentifyPurpose = () => {
	return (
		<>
		<h4>Criterio 1.3.6. <ExternalLink href="https://www.w3.org/TR/WCAG21/#identify-purpose"
contents="Identificar el propósito" /> (nivel AAA)</h4>
		<blockquote>
		<p>En contenido implementado mediante lenguajes de marcado, el propósito de componentes de interfaz de usuario, de iconos y regiones puede ser interpretado por distintas herramientas tecnológicas.</p>
		</blockquote>
		<p>Podemos usar la lista de elementos (<kbd>NVDA+f7</kbd>) y la letra <kbd>d</kbd> para navegar entre regiones, omitir enlaces y orientarnos dentro de una página web.</p>
		<p>También se puede <ExternalLink href="https://www.paciellogroup.com/blog/2013/07/enabling-landmark-based-keyboard-navigation-in-firefox" contents="navegar por regiones sin lector de pantalla" />.</p>
		</>
	)
}

export default IdentifyPurpose;
