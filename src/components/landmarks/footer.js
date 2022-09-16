import ExternalLink from '../single/externalLink';

const Footer = () => {
	return (
		<>
		<footer>
		<section>
		<h2 id="footer">Medios de contacto</h2>
		<ul>
		<li><ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLScw-5o7SV8p53fhDtT02IPlRP7nwySPheQAy86zR-FVaV2REQ/viewform" hrefLang="es" contents="formulario anónimo de Google" /></li>
		<li>correo electrónico: nrm1977@gmail.com</li>
		<li>Twitter: @norrumar</li>
		</ul>
		</section>
		<p><ExternalLink href="https://github.com/nvdaes/weba11y/" contents="Código fuente en GitHub" /></p>
<p>Última actualización: <time datetime="2022-09-16">16 de septiembre de 2022</time></p>
		</footer>
		</>
	);
}

export default Footer;
