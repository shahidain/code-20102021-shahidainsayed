import { render, screen } from "@testing-library/react";
import Header from "./Header";

test('Test for Header component', () => {
    render(<Header/>)
    const elementArray = screen.getAllByLabelText('BMI Calculator');
    const labelElement = elementArray[0];
    expect(labelElement).toBeInTheDocument();
});