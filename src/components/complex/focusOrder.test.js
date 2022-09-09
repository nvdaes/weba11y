import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import FocusOrder from './focusOrder';

describe('FocusOrder', () => {
	test('renders FocusOrder component', () => {
		render(<FocusOrder />);
		expect(screen.getByLabelText('Orden de foco incorrecto (el enlace Evaluating Web Accessibility Overview será difícil de encontrar)')).toBeInTheDocument();
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toEqual(false);
		userEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
			});
});
