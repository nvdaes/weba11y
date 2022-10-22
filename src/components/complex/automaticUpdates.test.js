import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import AutomaticUpdates from './automaticUpdates';

describe('AutomaticUpdates', () => {
	test('renders AutomaticUpdates component', () => {
		render(<AutomaticUpdates />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		const spinbutton = screen.getByRole('spinbutton');
		expect(spinbutton).toBeInTheDocument();
		userEvent.type(spinbutton, '2');
		expect(spinbutton).toHaveValue(2);
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		userEvent.type(spinbutton, '3');
		expect(spinbutton).toHaveValue(2);
			});	
});
