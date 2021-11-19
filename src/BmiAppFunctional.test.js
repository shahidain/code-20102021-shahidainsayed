import { render, screen } from '@testing-library/react';
import BmiAppFunction from './BmiAppFunctional';
test('Renders BMI Table', () => {
  const container = render(<BmiAppFunction/>);
  expect(container.getByText("Gender")).toBeInTheDocument();
});

test('Renders Add New Entry', () => {
  const container = render(<BmiAppFunction/>);
  expect(container.getByText("Add New Entry")).toBeInTheDocument();
});