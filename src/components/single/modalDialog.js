import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

// Modal.setAppElement('#ariaHidden');
const ModalDialog = (props) => {
	const {isOpen, contentLabel, content, closeModal} = props;
	return (
		<Modal
			isOpen={isOpen}
			// onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel={contentLabel}
		>
		<p>
		{content}
		</p>
		<button onClick={closeModal}>Cerrar</button>
		</Modal>
	)
}
export default ModalDialog;
