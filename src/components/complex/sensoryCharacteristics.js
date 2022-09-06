import { useState } from 'react';
import ExternalLink from '../single/externalLink';
import Checkbox from '../single/checkbox';

const SensoryCharacteristics = () => {
	const [showHeaders, setShowHeaders] = useState(false);
	const handleChange = (e) => setShowHeaders(e.target.checked);
	return (
	<>
		<h4 id="sensoryCharacteristics">Criterio 1.3.3. <ExternalLink href="https://www.w3.org/TR/WCAG21/#sensory-characteristics" contents="Características sensoriales" /> (nivel A)</h4>
		<p>Las instrucciones ofrecidas para entender y manejar el contenido no se basan solo en características sensoriales de los componentes, tales como forma, color, tamaño, ubicación visual, orientación o sonido.</p>
		<p>En la siguiente tabla se muestran ejemplos de instrucciones.</p>
		<form aria-labelledby="sensoryCharacteristics">
		<Checkbox label="Mostrar encabezados de columna para indicar si los ejemplos son correctos" onChange={handleChange} />
		</form>
		<table><caption>Ejemplos de instrucciones basadas en características sensoriales</caption>
		<thead>
		<tr style={{visibility: showHeaders ? "visible" : "hidden"}}><th>Incorrecto</th><th>Correcto</th></tr>
		</thead>
		<tbody>
		<tr><td>Pulsa el botón rojo</td><td>Pulsa el botón rojo (Activar alerta)</td></tr>
		<tr><td>El menú de <abbr title="Non Visual Desktop Access">NVDA</abbr> se encuentra en la barra inferior</td><td>El menú de <abbr title="Non Visual Desktop Access">NVDA</abbr> se puede activar desde la bandeja del sistema, también llamada área de notificaciones (<kbd>Windows+b</kbd>), situada en la barra inferior</td></tr>
		<tr><td>Dale a la campanita para suscribirte al canal</td><td>Pulsa el botón <em>Suscribirse</em> para recibir actualizaciones del canal</td></tr>
		</tbody>
		</table>
		</>
	)
}

export default SensoryCharacteristics;
