import { useState } from 'react';
import ExternalLink from '../single/externalLink';
import Checkbox from '../single/checkbox';

const Sequence = () => {
	const [meaningfulSeq, setMeaningfulSeq] = useState("Nota importante");

const handleChange = (e) => {
	if (e.target.checked) { setMeaningfulSeq("N o t a i m p o r t a n t e") } else { setMeaningfulSeq("Nota importante") }
}
	return (
	<>
		<h4>Criterio 1.3.2. <ExternalLink href="https://www.w3.org/TR/WCAG21/#meaningful-sequence" contents="Orden significativo" /> (nivel A)</h4>
		<p>Cuando el orden en que se presenta un contenido afecte a su significado, una secuencia correcta debe poder ser interpretada por distintas herramientas tecnológicas.</p>
		<p>A continuación comprobaremos el efecto de incluir espacios en un fragmento de texto, técnica que a veces se utiliza para dar formato, y la diferencia al presentar la secuencia correcta.</p>
		<form>
		<Checkbox label="Secuencia con espacios intercalados" onChange={handleChange} />
		</form>
		<h5>{meaningfulSeq}</h5>
		<p>...</p>
		</>
	)
}

export default Sequence;
