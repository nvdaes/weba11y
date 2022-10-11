import { render, screen, fireEvent } from '@testing-library/react';

import Title from './title';

describe('Title', () => {
	test('renders Title component', () => {
		render(<Title />);
		expect(screen.getByLabelText('Título de la página:')).toBeInTheDocument();
		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'JavaScript' }
		});
		expect(document.title).toBe('JavaScript');
	});
});
