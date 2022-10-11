import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import StatusMessages from './StatusMessages';

describe('StatusMessages', () => {
	test('renders StatusMessages component', () => {
		render(<StatusMessages />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toEqual(false);
		userEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
	});
});
