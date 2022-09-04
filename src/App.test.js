import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first heading', () => {
  render(<App />);
  const h1Element = screen.getByText(/Evaluación de accesibilidad conforme a/i);
  expect(h1Element).toBeInTheDocument();
});
