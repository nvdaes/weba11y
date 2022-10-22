import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import NonTextContent from './NonTextContent';

describe('NonTextContent', () => {
	test('renders NonTextContent component', () => {
		render(<NonTextContent />);
		const textbox = screen.getByRole('textbox');
		expect(textbox).toBeInTheDocument();
		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
		expect(image.getAttribute('alt')).toBe('logo');
		userEvent.type(textbox, 'JavaScript');
		expect(image.getAttribute('alt')).toBe('logoJavaScript');
	});
})
