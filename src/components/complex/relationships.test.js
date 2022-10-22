import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Relationships from './relationships';

describe('Relationships', () => {
	test('renders Relationships component', () => {
		render(<Relationships />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		const table = screen.getByRole('table');
		expect(table).toBeInTheDocument();
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(screen.queryByRole('table')).toBeNull();
	});
});
