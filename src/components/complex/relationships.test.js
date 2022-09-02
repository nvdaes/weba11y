import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Relationships from './relationships';

describe('Relationships', () => {
	test('renders Relationships component', () => {
		render(<Relationships />);
		expect(screen.getByLabelText(/Eliminar información semántica en tabla/i)).toBeInTheDocument();
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toEqual(false);
		const table = screen.getByRole('table');
		expect(table).toBeInTheDocument();
		userEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
		expect(screen.queryByRole('table')).toBeNull();
	});
});
