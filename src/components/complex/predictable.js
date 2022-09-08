import ExternalLink from "../single/externalLink";
import Note from '../single/note';

const Predictable = () => {
	return (
		<>
		<h3>Pauta 3.2. <ExternalLink href="https://www.w3.org/TR/WCAG21/#predictable" contents="Predecible" /></h3>
		<Note id="predictable" label="Predecible:" />
		<blockquote>
		<p>Haz que las páginas web aparezcan y se manejen de forma predecible.</p>
		</blockquote>
		<p>Los criterios de esta pauta, en resumen, establecen lo siguiente:</p>
		<ul>
		<li>Al situar el foco en un componente o al cambiar opciones (por ejemplo, en formularios) no se producirá un cambio de contexto (haciendo que el foco se elimine del componente deseado, abriendo nuevas ventanas sin haber informado con antelación, etc.). Lo ideal es que los cambios de contexto se produzcan cuando se soliciten.</li>
		<li>Los mecanismos de navegación y la identificación de componentes serán consistentes entre páginas web pertenecientes a un mismo conjunto, por ejemplo, un mismo portal.</li>
		</ul>
		<p>Veamos un ejemplo de cambio de contexto al modificar datos en un formulario.</p>
		</>
	)
}

export default Predictable;
