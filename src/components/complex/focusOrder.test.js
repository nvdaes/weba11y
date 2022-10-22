import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import FocusOrder from './focusOrder';

describe('FocusOrder', () => {
	test('renders FocusOrder component', () => {
		render(<FocusOrder />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
			});
});
