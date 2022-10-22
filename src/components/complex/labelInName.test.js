import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LabelInName from './labelInName';

describe('LabelInName', () => {
	test('renders LabelInName component', () => {
		render(<LabelInName />);
		const textbox = screen.getByRole('textbox');
		userEvent.type(textbox, 'JavaScript');
		expect(textbox.getAttribute('aria-label')).toBe('JavaScript');
	});
});
