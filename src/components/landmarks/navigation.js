import InternalLink from '../single/internalLink';

const Navigation = () => {
	return (
		<>
		<nav aria-labelledby="toc">
		<details>
		<summary><h2 id="toc">Tabla de contenido</h2></summary>
		<ul>
		<li><InternalLink href="#eval" contents="Consideraciones sobre la evaluación de accesibilidad"/></li>
		<li><InternalLink href="#perceivable" contents="Perceptible"/></li>
		<ul>
		<li><InternalLink href="#textAlternatives" contents="Alternativas de texto" /></li>
		<li><InternalLink href="#timeBasedMedia" contents="Contenido multimedia dependiente del tiempo" /></li>
		<li><InternalLink href="#adaptable" contents="Adaptable" /></li>
		<li><InternalLink href="#distinguishable" contents="Distinguible" /></li>
		</ul>
		<li><InternalLink href="#operable" contents="Manejable" /></li>
		<ul>
		<li><InternalLink href="#keyboard" contents="Accesible mediante el teclado" /></li>
		<li><InternalLink href="#time" contents="Tiempo suficiente" /></li>
		<li><InternalLink href="#seizures" contents="Convulsiones y reacciones físicas" /></li>
		<li><InternalLink href="#navigable" contents="Navegable" /></li>
		<li><InternalLink href="#inputModalities" contents="Modalidades de entrada" /></li>
		</ul>
		<li><InternalLink href="#understandable" contents="Comprensible" /></li>
		<ul>
		<li><InternalLink href="#readable" contents="Legible" /></li>
		<li><InternalLink href="#predictable" contents="Predecible" /></li>
		<li><InternalLink href="#inputAssistance" contents="Asistencia para la entrada de datos" /></li>
		</ul>
		<li><InternalLink href="#robust" contents="Robusto" /></li>
		<ul>
		<li><InternalLink href="#compatible" contents="Compatible" /></li>
		</ul>
		</ul>
		</details>
		</nav>
		</>
		)
}

export default Navigation;
