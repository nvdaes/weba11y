import { render, screen, fireEvent } from '@testing-library/react';

import NonTextContent from './NonTextContent';

describe('NonTextContent', () => {
	test('renders NonTextContent component', () => {
		render(<NonTextContent />);
		expect(screen.getByLabelText(/Introduce la alternativa de texto para la imagen:/i)).toBeInTheDocument();
		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'JavaScript' }
		});
		expect(screen.getByAltText('JavaScript')).toBeInTheDocument();
	});
});
