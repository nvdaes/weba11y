import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Keyboard from './keyboard';

describe('Keyboard', () => {
	test('renders Keyboard component', () => {
		render(<Keyboard />);
		expect(screen.getByLabelText(/Mover foco fuera del botón Abrir diálogo de alerta/i)).toBeInTheDocument();
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toEqual(false);
		userEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
			});
});
