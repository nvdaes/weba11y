import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Sequence from './sequence';

describe('Sequence', () => {
	test('renders Sequence component', () => {
		render(<Sequence />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		expect(screen.getByText(/Nota importante/i)).toBeInTheDocument();
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(screen.queryByText(/Nota importante/i)).not.toBeInTheDocument();
	});
});
