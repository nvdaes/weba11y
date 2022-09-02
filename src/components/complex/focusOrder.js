import ExternalLink from "../single/externalLink";

const FocusOrder = () => {
	const handleChange = (e) => {
		e.target.checked ? document.getElementById("index1").setAttribute("tabindex", "1"): document.getElementById("index1").removeAttribute("tabindex");
	}
	return (
		<>
		<h4>Criterio 2.4.3. <ExternalLink href="https://www.w3.org/TR/WCAG21/#focus-order"
contents="Orden del foco" /> (nivel A)</h4>
		<blockquote>
		<p>Si es posible navegar secuencialmente por una página web y el orden de navegación afecta a su significado u operabilidad, los componentes que pueden recibir el foco lo reciben en un orden que preserve el significado y la operabilidad.</p>
		</blockquote>
		<p>Marca la siguiente casilla de verificación para comprobar el efecto de indicar un orden de navegación que no coincide con el orden de lectura. Intenta navegar con <kbd>tab</kbd>.</p>
		<p>Usaremos una técnica basada en <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F44.html" hrefLang="en" contents="F44" /></p>
		<form>
		<label>Orden de lectura incorrecto (el enlace <span lang="en">Evaluating Web Accessibility Overview</span> será difícil de encontrar)
		<input type="checkbox" 		onChange={handleChange}
		/>
		</label>
		</form>
		<h5>Enlaces sobre evaluación de accesibilidad</h5>
		<ul>
		<li><a id="index1" hrefLang="en" href="https://www.w3.org/WAI/test-evaluate/"
		target="_blank"
		rel="noopener noreferrer"><span lang="en">Evaluating Web Accessibility Overview | Web Accessibility Initiative (WAI) | W3C</span> (abre nueva ventana)</a></li>
		<li><a hrefLang="es" href="https://www.tawdis.net"
		target="_blank"
		rel="noopener noreferrer">TAW (abre nueva ventana)</a></li>
		</ul>
		</>
	)
}

export default FocusOrder;
