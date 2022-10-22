import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Keyboard from './keyboard';

describe('Keyboard', () => {
	test('renders Keyboard component', () => {
		render(<Keyboard />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
			});
});
