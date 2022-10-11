import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SensoryCharacteristics from './sensoryCharacteristics';

describe('SensoryCharacteristics', () => {
	test('renders SensoryCharacteristics component', () => {
		render(<SensoryCharacteristics />);
		expect(screen.getByLabelText(/Mostrar encabezados de columna para indicar si los ejemplos son correctos/i)).toBeInTheDocument();
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toEqual(false);
		const thead = screen.queryByText('Incorrecto');
		expect(thead).toBeInTheDocument();
		expect(thead).not.toBeVisible();
		userEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
		expect(thead).toBeVisible();
	});
});
