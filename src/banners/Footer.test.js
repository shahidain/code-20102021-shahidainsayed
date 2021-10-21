import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test('Test for footer component', () => {
    render(<Footer/>)
    const elementArray = screen.getAllByLabelText('©2020 - 2021 BMI');
    const labelElement = elementArray[0];
    expect(labelElement).toBeInTheDocument();
});