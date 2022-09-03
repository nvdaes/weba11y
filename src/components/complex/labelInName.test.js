import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import LabelInName from './labelInName';

describe('LabelInName', () => {
	test('renders LabelInName component', () => {
		render(<LabelInName />);
		expect(screen.getByLabelText('Cambiar nombre accesible:')).toBeInTheDocument();
		const textbox = screen.getByRole('textbox');
		fireEvent.change(textbox, {
			target: { value: 'JavaScript' }
		});
		expect(textbox.getAttribute('aria-label')).toBe('JavaScript');
	});
});
