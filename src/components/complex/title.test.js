import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Title from './title';

describe('Title', () => {
	test('renders Title component', () => {
		render(<Title />);
		const textbox = screen.getByRole('textbox');
		expect(textbox).toBeInTheDocument();
		userEvent.type(textbox, 'JavaScript');
		expect(document.title).toBe('JavaScript');
	});
});
