import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(
    <div>
      <h1>Mire</h1>
      <App />
    </div>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
