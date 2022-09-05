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
		<li>transcripciones estructuradas correctamente (por ejemplo, en <abbr title="Hypertext Markup Language">HTML</abbr>), que podrán ser leídas y revisadas mediante voz y braille;</li>
		<li>subtítulos;</li>
		<li>lengua de signos;</li>
		<li>audiodescripción (simultánea o ampliada).</li>
		</ul>
		<p>Como ejemplo, compartimos un audio de Sergio Gómez en el que nos habla sobre la lista de elementos y la navegación con una sola letra. También incluimos la transcripción del audio, como indica el <ExternalLink href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded" contents="criterio 1.2.1" />.</p>
		<aside aria-labelledby="transcript">
		<p id="transcript">
			<a href="https://www.w3.org/WAI/media/av/transcripts" hrefLang="en" lang="en" target="_blank"
		rel="noopener noreferrer"
		>Transcripts | <abbr title="Web Accessibility Initiative">WAI</abbr>
		</a>
		</p>
		</aside>
		<p id="audio">Audio sobre la lista de elementos y la navegación con una sola letra (Sergio Gómez)</p>
		<p>
			<audio aria-labelledby="audio" controls src="https://drive.google.com/uc?export=download&id=103Ckiv16LBIFU0eH9kP2ZQ-uF5Yo9mEQ">Tu navegador no admite audio</audio>
		</p>
		<details><summary>Transcripción del audio sobre la lista de elementos y navegación con una sola letra</summary>
		<p>
		Sergio Gómez: Hola:
		</p>
	<p>
	Os voy a repasar rápidamente para qué sirve la lista de elementos en páginas web, y la navegación rápida por una sola tecla. Es lo mismo, solo que se puede navegar a elementos rápidamente pulsando una tecla.
	</p>
	<p>
	La lista de elementos debería poder ejecutarse en campos de edición, o sea, que es el mismo resultado estando en campos de escritura, ya que lo que muestra son los elementos de la web tal cual.
	</p>
	<p>
	Bueno. Una vez se abre con las teclas <kbd>NVDA+f7</kbd>, nos salen unos elementos, los cuales podemos repasar con flechas. Seleccionamos uno, por ejemplo, encabezado, pulsamos <kbd>tabulador</kbd> y nos salen todos los encabezados, los cuales los podemos recorrer con flechas.
	</p>
	<p>
	Para ir a uno pulsamos <kbd>intro</kbd>. Para volver al selector de elemento pulsamos <kbd>shift+tabulador</kbd>.
	</p>
	<p>
	Las teclas rápidas, bueno: se pueden repasar desde el diálogo <q>Gestos de entrada</q> de <abbr title="Non Visual Desktop Access">NVDA</abbr>, yendo a <q>menú NVDA, Preferencias, Gestos de entrada</q>. Estando en modo exploración. Porque normalmente, con estos gestos, si no estamos en el modo actualmente, no suelen aparecer en el diálogo. O sea, tenemos que tenerlos en uso.
	</p>
	<p>
	Y luego también los podemos repasar mediante la <q>ayuda de entrada</q>. Podemos replicarlos pulsando <kbd>NVDA+1</kbd>, para activar la ayuda de entrada, y pulsar las teclas.
	</p>
	<p>
	Por ejemplo: la tecla <kbd>b</kbd> es para ir al botón. <kbd>Shift+b</kbd> es para ir al botón anterior. Me explico: <kbd>b</kbd>, botón siguiente; <kbd>shift+b</kbd>, botón anterior.
	</p>
	<p>
	Y nada. Solo quería explicaros esto.
	</p>
		</details>
		</>
	)
}

export default TimeBasedMedia;
