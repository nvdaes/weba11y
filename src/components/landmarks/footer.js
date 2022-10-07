import ExternalLink from '../single/externalLink';
import LastUpdate from '../single/lastUpdate';

const Footer = () => {
	return (
		<>
		<footer>
		<section>
		<h2 id="footer">Medios de contacto</h2>
		<address>
		<ul>
		<li><ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLScw-5o7SV8p53fhDtT02IPlRP7nwySPheQAy86zR-FVaV2REQ/viewform" hrefLang="es" contents="formulario anónimo de Google" /></li>
		<li>correo electrónico: nrm1977@gmail.com</li>
		<li>Twitter: @norrumar</li>
		</ul>
		</address>
		</section>
		<p><ExternalLink href="https://github.com/nvdaes/weba11y/" contents="Código fuente en GitHub" /></p>
		<LastUpdate />
		</footer>
		</>
	);
}

export default Footer;
