import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SensoryCharacteristics from './sensoryCharacteristics';

describe('SensoryCharacteristics', () => {
	test('renders SensoryCharacteristics component', () => {
		render(<SensoryCharacteristics />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		const thead = screen.queryByText('Incorrecto');
		expect(thead).toBeInTheDocument();
		expect(thead).not.toBeVisible();
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(thead).toBeVisible();
	});
});
