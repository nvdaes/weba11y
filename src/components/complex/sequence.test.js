import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Sequence from './sequence';

describe('Sequence', () => {
	test('renders Sequence component', () => {
		render(<Sequence />);
		expect(screen.getByLabelText(/Secuencia con espacios intercalados/i)).toBeInTheDocument();
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toEqual(false);
		expect(screen.getByText(/Nota importante/i)).toBeInTheDocument();
		userEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
		expect(screen.queryByText(/Nota importante/i)).not.toBeInTheDocument();
	});
});
