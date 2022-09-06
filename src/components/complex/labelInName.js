import {useState} from 'react';

import ExternalLink from '../single/externalLink';
import Textbox from '../single/textbox';

const LabelInName = () => {
	const [ariaLabel, setAriaLabel] = useState("");
	const handleChange = (e) => {
		setAriaLabel(e.target.value);
	}
	return (
		<>
		<h4 id="labelInName">Criterio 2.5.3. <ExternalLink href="https://www.w3.org/TR/WCAG21/#label-in-name" contents="Etiqueta en nombre" /> (nivel A)</h4>
		<blockquote>
		<p>Para componentes de interfaz de usuario con etiquetas que incluyan texto o imágenes de texto, el nombre incluye el texto que se presenta visualmente.</p>
		</blockquote>
		<p>Esto puede ser importante para personas que naveguen por la web mediante comandos de reconocimiento del habla. También puede mejorar la experiencia si se usan sintetizadores de voz, que en este caso leerán un nombre que contenga el texto presentado visualmente para identificar el componente.</p>
		<form role="form" aria-labelledby="labelInName">
		<Textbox label="Cambiar nombre accesible:" ariaLabel={ariaLabel} onChange={handleChange} />
		</form>
		</>
	)
}

export default LabelInName;
