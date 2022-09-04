import ExternalLink from '../single/externalLink';

const LanguageOfPage = () => {
	return (
		<>
		<h4>Criterio 3.1.1. <ExternalLink href="https://www.w3.org/TR/WCAG21/#language-of-page" contents="Idioma de la página" /> (nivel A)</h4>
		<p>El idioma humano predeterminado para cada página web se definirá de modo que pueda ser interpretado por distintas herramientas tecnológicas. En <abbr title="Hypertext Markup Language">HTML</abbr> podemos lograrlo usando el atributo <code>lang</code>.</p>
		</>
	)
}

export default LanguageOfPage;

