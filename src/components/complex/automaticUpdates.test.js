import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import AutomaticUpdates from './automaticUpdates';

describe('AutomaticUpdates', () => {
	test('renders AutomaticUpdates component', () => {
		render(<AutomaticUpdates />);
		expect(screen.getByLabelText(/Activar cronómetro/i)).toBeInTheDocument();
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toEqual(false);
		userEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
			});
});
