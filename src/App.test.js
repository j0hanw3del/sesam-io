import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SearchBox component', () => {
  render(<App />);
  const searchBoxElement = screen.getByLabelText(/search/i);
  expect(searchBoxElement).toBeInTheDocument();
});
