import ExternalLink from '../single/externalLink';

const Distinguishable = () => {
	return (
			<>
		<h3>Pauta 1.4. <ExternalLink href="https://www.w3.org/TR/WCAG21/#distinguishable" contents="Distinguible" /></h3>
		<blockquote>
		<p>Facilita que los usuarios puedan ver y oír el contenido, incluida la separación entre primer plano y fondo.</p>
		</blockquote>
		<p>Esta pauta incluye criterios relativos al control de audio, para que no interfiera con la lectura mediante sintetizadores de voz, y requisitos sobre el uso del color, contraste, etc., para personas que realicen lectura visual.</p>
		<p>Por ejemplo, <ExternalLink href="https://webaim.org/resources/contrastchecker" contents="comprueba el contraste de colores" />.</p>
		</>
	)
}

export default Distinguishable;
