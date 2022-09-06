import ExternalLink from '../single/externalLink';

const EnoughTime = () => {
	return (
		<>
		<h3 id="time">Pauta 2.2. <ExternalLink href="https://www.w3.org/TR/WCAG21/#enough-time" contents="Tiempo suficiente" /></h3>
		<blockquote>
		<p>Da a los usuarios el tiempo suficiente para que lean y utilicen el contenido.</p>
		</blockquote>
		<p>Esta pauta se concreta en criterios como los siguientes, mencionados de forma aproximada:</p>
		<ul>
		<li>Cuando en el contenido exista un límite de tiempo de veinte horas o menos, este límite deberá poder ampliarse siempre que sea viable.</li>
		<li>Debe ser posible detener, pausar u ocultar contenido que se desplace o parpadee durante más de cinco segundos o que se actualice automáticamente.</li>
		<li>Las interrupciones se podrán pausar o suprimir voluntariamente, excepto en casos de emergencia.</li>
		<li>Cuando una sesión expire, será posible reiniciarla y reanudar la actividad sin perder datos.</li>
		<li>Se informará sobre la duración de cualquier inactividad que produzca pérdida de datos, a menos que los datos se conserven durante veinte horas o más.</li>
		</ul>
		<p>Veamos el efecto de pausar y elegir la frecuencia de actualización.</p>
		</>
	)
}

export default EnoughTime;
