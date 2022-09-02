import logo from '../assets/logo.svg';
import {useState} from 'react';
import ExternalLink from '../single/externalLink';
import Textbox from '../single/textbox';

const NonTextContent = () => {
	const [alternative, setAlternative] = useState("logo");
	const handleChange= (e) => setAlternative(e.target.value);
	return (
	<>
			<h4>Criterio 1.1.1. <ExternalLink href="https://www.w3.org/TR/WCAG21/#non-text-content" contents="Contenido no textual" /> (nivel A)</h4>
		<p>En muchos casos, es necesario proporcionar una alternativa de texto para contenido no textual.</p>
		<p>En el siguiente formulario podemos establecer (o borrar completamente) la alternativa textual para un gráfico. De este modo comprobaremos cómo afecta a la lectura con NVDA.</p>
		<form>
		<Textbox label="Introduce la alternativa de texto para la imagen:" value={alternative} onChange={handleChange} />
		</form>
		<p>A continuación se muestra la imagen con la alternativa textual establecida.</p>
		<p>Puedes navegar a la próxima imagen situada bajo el cursor pulsando la letra g en modo exploración. NVDA leerá el texto alternativo.</p>
		<img src={logo} className="App-logo" alt={alternative} />
		<h5>Para tener en cuenta</h5>
		<ul>
		<li>Cuando el contenido no textual no consista en imágenes, deberá disponer de un nombre que lo identifique y,  además, si se trata de un captcha, será necesario incluir alternativas en distintas modalidades sensoriales.</li>
		<li>Para algunas imágenes no será suficiente una alternativa de texto breve y deberán usarse técnicas como, por ejemplo, las mencionadas en este <ExternalLink href="https://nvdaes.github.io/epub8" hreflang="es" contents="artículo sobre descripciones extensas" /></li>
		</ul>
		</>
	)
}

export default NonTextContent;
