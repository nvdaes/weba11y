import ExternalLink from '../single/externalLink';
import { Wcag, Nvda } from '../single/abbrs';

const Evaluation = () => {
	return (
		<>
		<h2 id="eval">Consideraciones sobre la evaluación de accesibilidad</h2>
		<p>Para comprobar si un contenido se ajusta a las pautas de accesibilidad son necesarias tanto pruebas automatizadas como la evaluación humana. Esta evaluación deberían realizarla quienes sepan cómo usan la web personas con distintos tipos de discapacidades.</p>
		<p>Además, se recomienda incluir a personas con discapacidades cuando se lleven a cabo pruebas de usabilidad.</p>
		<p>Para más información, consultar este <ExternalLink href="https://www.w3.org/WAI/WCAG22/Understanding/conformance" contents="documento sobre el significado de la conformidad con las pautas de accesibilidad web" />, donde también se menciona la evaluación con lectores de pantalla.</p>
		<p>A grandes rasgos, los lectores de pantalla son programas capaces de transmitir el texto que aparece en la pantalla de un sistema informático, de modo que pueda leerse mediante sintetizadores de voz o dispositivos de salida braille.</p>
		<p>Generalmente son usados por personas con discapacidad visual, pero pueden ser útiles en otros casos. Por ejemplo, para que personas con o sin discapacidades evalúen la accesibilidad de documentos o páginas web.</p>
		<p>Si tienes capacidad visual y quieres utilizar <Nvda /> como herramienta de evaluación, puedes establecer las siguientes opciones:</p>
		<ul>
		<li>Activa el visualizador de voz desde el menú NVDA, submenú Herramientas.</li>
		<li>Desactiva la opción Indicación Audible de los modos foco y exploración, desde el cuadro de diálogo Modo exploración (<kbd>NVDA+control+b</kbd>).</li>
		<li>Desactiva las opciones Arrancar NVDA después de iniciar sesión y Usar NVDA durante el inicio de sesión (requiere privilegios de administrador), disponibles en el cuadro de Diálogo Opciones generales (<kbd>control+NVDA+g</kbd>).</li>
		<li>Activa la opción Habilitar resaltado (menú NVDA, submenú Preferencias, diálogo Opciones, categoría Visión).</li>
		<li>Desactiva el seguimiento del ratón (<kbd>NVDA+m</kbd>).</li>
		<li>Desde el diálogo de bienvenida, disponible en el submenú Ayuda del menú NVDA, puedes elegir si la tecla <kbd>bloqueo de mayúsculas</kbd> se utilizará como tecla modificadora NVDA y la disposición del teclado (de escritorio o portátil). También podrás desmarcar la casilla de verificación correspondiente para que este diálogo no se muestre cada vez que se inicie el lector de pantalla.</li>
		<li>Desde el diálogo Gestos de entrada, disponible en el submenú Preferencias del menú NVDA, puedes configurar gestos para activar y desactivar la cortina de pantalla y el visualizador braille.</li>
		</ul>
		<p>Para usar <Nvda /> como herramienta de evaluación debemos conocer, entre otros, los siguientes aspectos relativos a su funcionamiento:</p>
		<ul>
		<li>Qué es la tecla modificadora <kbd>NVDA</kbd>.</li>
		<li>Cómo iniciar <Nvda /> (<kbd>control+alt+n</kbd>).</li>
		<li>Salir de <Nvda /> (<kbd>NVDA+q</kbd>).</li>
		<li>Menú NVDA (<kbd>NVDA+n</kbd>).</li>
		<li>Consulta de documentación desde el submenú Ayuda, gestos de entrada, opciones de configuración, herramientas como el Visualizador de voz y Crear copia portable, etc.</li>
		<li>Ayuda de entrada (<kbd>NVDA+1</kbd>).</li>
		<li>Diferencia entre título (<kbd>NVDA+t</kbd>) y foco (<kbd>NVDA+tab</kbd>).</li>
		<li>Lectura continua (<kbd>NVDA+flecha abajo</kbd> o <kbd>NVDA+a</kbd> en teclado portátil), navegación con teclas de cursor (<kbd>control+inicio</kbd> para ir al principio del documento, <kbd>flechas</kbd>, etc.) y <kbd>tab</kbd>.</li>
		<li>Interrumpir y pausar la voz (<kbd>control</kbd> y <kbd>shift</kbd>).</li>
		<li>Modo exploración y modo foco.</li>
		<li>Características de elementos como enlaces, botones, cuadros de edición, casillas de verificación, tablas, etc.</li>
		<li>Lista de elementos (<kbd>NVDA+f7</kbd>), búsqueda en modo exploración (<kbd>NVDA+control+f</kbd>) y navegación con una sola letra (<kbd>b</kbd> para ir a botones, <kbd>h</kbd> para encabezados, etc.).</li>
		</ul>
		<p>Al evaluar un documento, página o sitio web podemos tener en cuenta tanto nuestra experiencia global como en relación a cada uno de los criterios aplicables de las <Wcag />.</p>
		<p>Existen cuatro criterios a los que debemos prestar especial atención, ya que, como se menciona en el <ExternalLink href="https://www.w3.org/TR/WCAG21/#cc5" contents="requisito de conformidad 5.5 de las pautas de accesibilidad" />, su incumplimiento puede interferir con cualquier uso de la página:</p>
		<ul>
		<li>1.4.2: Control de audio;</li>
		<li>2.1.2: Evitar que el teclado quede atrapado;</li>
		<li>2.2.2: Pausar, ocultar, detener;</li>
		<li>2.3.1: Tres parpadeos o límite inferior.</li>
		</ul>
		<p>Las técnicas de evaluación elegidas dependerán de factores como el tipo de elementos del contenido que queramos evaluar, si se ha elaborado considerando la accesibilidad desde el inicio, etc.</p>
		<p>Consulta este <ExternalLink href="https://daisy.org/info-help/guidance-training/daisy-tools/creating-accessible-word-documents/" contents="documento con información sobre evaluación de accesibilidad" />.</p>
		</>
	)
}

export default Evaluation;
