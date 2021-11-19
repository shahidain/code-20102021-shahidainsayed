import { render, screen } from '@testing-library/react';
import BmiApp from './BmiApp';
test('Renders BMI Table', () => {
  const container = render(<BmiApp/>);
  expect(container.getByText("BMI Category")).toBeInTheDocument();
});