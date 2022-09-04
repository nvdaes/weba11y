import ExternalLink from '../single/externalLink';

const LanguageOfParts = () => {
	return (
		<>
		<h4>Criterio 3.1.2. <ExternalLink href="https://www.w3.org/TR/WCAG21/#language-of-parts" contents="Idioma de fragmentos" /> (nivel AA)</h4>
		<p>El idioma humano de cada fragmento o frase será definido de modo que pueda ser interpretado por distintas herramientas tecnológicas, excepto en el caso de nombres propios, términos técnicos, palabras de idiomas indeterminados, o palabras o frases que hayan llegado a ser parte de la lengua del texto circundante.</p>
		<p>Asegúrate de que <abbr title="Non Visual Desktop Access">NVDA</abbr> está configurado para detectar cambios de idioma y comprueba el efecto de leer este párrafo en inglés. Ten en cuenta que no todos los sintetizadores de voz son compatibles con la detección de idioma. Puedes usar eSpeak-NG. Pulsando <kbd>NVDA+control+s</kbd> accederás al diálogo <q>Seleccionar sintetizador</q>.</p>
		<details>
		<summary>Párrafo en castellano con idioma establecido en inglés
		</summary>
		<p lang="en">Asegúrate de que NVDA está configurado para detectar cambios de idioma y comprueba el efecto de leer este párrafo en inglés. Ten en cuenta que no todos los sintetizadores de voz son compatibles con la detección de idioma.</p>
		</details>
		</>
	)
}

export default LanguageOfParts;
