import ExternalLink from "../single/externalLink";

const HeadingsAndLabels = () => {
	return (
		<>
		<h4>Criterio 2.4.6. <ExternalLink href="https://www.w3.org/TR/WCAG21/#headings-and-labels"
contents="Encabezados y etiquetas" /> (nivel AA)</h4>
		<blockquote>
		<p>Los encabezados y etiquetas describen el tema o propósito.</p>
		</blockquote>
		<p>La intención de este criterio es que los encabezados y las etiquetas describan adecuadamente el tema o propósito de los contenidos a los que se refieren. Por ejemplo, un encabezado con el texto <q>Título 1</q> podría ser inadecuado en muchos casos, y una etiqueta como <q>Fecha</q> podría ser insuficiente si no se indica qué tipo de fecha se requiere (de nacimiento, de llegada a un destino, etc.). Esto también es útil para comprender su significado al leerlos fuera de contexto.</p>
				<p>Si se usa un lenguaje como HTML, podemos desplazarnos al encabezado siguiente o anterior pulsando <kbd>h</kbd> o <kbd>shift+h</kbd>, respectivamente, o navegar por encabezados mediante la lista de elementos (<kbd>NVDA+f7</kbd>). Podríamos leer las etiquetas, por ejemplo en un formulario, mediante el cursor en modo exploración, ya que se trata de texto o de otros componentes con texto alternativo para identificar ciertos componentes del contenido de una web (no confundir con el nombre de un control, que puede consultarse con comandos como <kbd>NVDA+tab</kbd>).</p>
		</>
	)
}

export default HeadingsAndLabels;
