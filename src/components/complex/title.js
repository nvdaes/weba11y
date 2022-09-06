import ExternalLink from '../single/externalLink';
import Textbox from '../single/textbox';

const Title = () => {
	const handleChange= (e) => document.title = e.target.value;
		return (
		<>
		<h4 id="title">Criterio 2.4.2. <ExternalLink href="https://www.w3.org/TR/WCAG21/#page-titled" contents="Página con título" /> (nivel A)</h4>
		<blockquote>
		<p>Las páginas tienen títulos que describen su tema o propósito.</p>
		</blockquote>
		<p>Podemos comprobar el efecto de incluir títulos poco significativos mediante el siguiente formulario: al cambiar el texto del cuadro de edición se modificará el título de esta página web.</p>
		<form role="form" aria-labelledby="title">
		<Textbox label="Título de la página:" onChange={handleChange} />
		</form>
		</>
	)
}

export default Title;
