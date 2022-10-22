import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import OnInput from './onInput';

describe('OnInput', () => {
	test('renders OnInput component', () => {
		render(<OnInput />);
		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
			});
});
