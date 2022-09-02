import ExternalLink from '../single/externalLink';

const TimeBasedMedia = () => {
	return (
		<>
		<h3>Pauta 1.2. <ExternalLink href="https://www.w3.org/TR/WCAG21/#time-based-media" contents="Contenido multimedia dependiente del tiempo" /></h3>
		<blockquote>
		<p>Proporciona alternativas para contenido multimedia dependiente del tiempo</p>
		</blockquote>
		<p>El contenido multimedia puede ser pregrabado o en tiempo real, y existen criterios de accesibilidad para ambas modalidades.</p>
		<p>Para hacer accesible el contenido multimedia puede utilizarse, en función de si se trata de audio, vídeo o ambos:</p>:
		<ul>
		<li>transcripciones estructuradas correctamente (por ejemplo, en HTML), que podrán ser leídas y revisadas con NVDA, mediante voz y braille;</li>
		<li>subtítulos;</li>
		<li>lengua de signos;</li>
		<li>audiodescripción (simultánea o ampliada).</li>
		</ul>
		<p><a href="https://www.w3.org/WAI/media/av/transcripts" hrefLang="en" lang="en" target="_blank"
		rel="noopener noreferrer"
		>Transcripts | WAI</a> (en inglés)</p>
		</>
	)
}

export default TimeBasedMedia;
