import ExternalLink from '../single/externalLink';

const Footer = () => {
	const update = new Date(document.lastModified);
	const day = update.getDate();
	const month = update.getMonth();
	const year = update.getFullYear();

	return (
		<>
		<footer>
		<section>
		<h2 id="footer">Medios de contacto</h2>
		<ul>
		<li>formulario anónimo de Google</li>
		<li>correo electrónico: nrm1977@gmail.com</li>
		<li>Twitter: @norrumar</li>
		</ul>
		</section>
		<p><ExternalLink href="https://github.com/nvdaes/weba11y/" contents="Código fuente en GitHub" /></p>
		<p>Última actualización: {day}/{month}/{year}</p>
		
		</footer>
		</>
	);
}

export default Footer;
