import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import OnInput from './onInput';

describe('OnInput', () => {
	test('renders OnInput component', () => {
		render(<OnInput />);
		expect(screen.getByLabelText(/Elige un tipo de entretenimiento:/i)).toBeInTheDocument();
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toEqual(false);
		userEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
			});
});
