import ExternalLink from '../single/externalLink';

const LinkContext = () => {
	return (
		<>
		<h4>Criterio 2.4.4. <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
contents="Propósito de enlaces (en contexto)" /> (nivel A)</h4>
		<blockquote>
		<p>El propósito de cada enlace puede ser determinado mediante el texto del enlace por sí mismo o mediante el texto del enlace y su contexto programado, excepto cuando el propósito del enlace sea ambiguo para los usuarios en general.</p>
		</blockquote>
		<p>Un ejemplo de texto insuficiente para un enlace podría ser <q>Haz clic aquí</q>.</p>
		<p>Si el texto del enlace no es suficiente para transmitir su propósito, es posible incluir información en su contexto mediante el atributo <q>title</q> o utilizando <abbr title="Accessible Rich Internet Applications">ARIA</abbr>. También podría incluirse información en una frase próxima del mismo párrafo o en otros elementos considerados como pertenecientes a su contexto programado.</p>
		<p>Cuando el texto del enlace sea suficiente por sí mismo, también se cumplirá con el <ExternalLink href="https://www.w3.org/TR/WCAG21/#link-purpose-link-only" contents="criterio 2.4.9" /> (nivel AAA), muy importante para ver y usar los enlaces desde la lista de elementos (<kbd>NVDA+f7</kbd>).</p>
		</>
	)
}

	export default LinkContext;
