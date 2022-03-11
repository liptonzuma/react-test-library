import { render, screen,fireEvent } from '@testing-library/react';
import Input from '../Input'

describe("Testing Input field", () => {

    test('renders placeholder text', () => {
        render(<Input />);
        const inputElement = screen.getByPlaceholderText(/enter text/i)
        expect(inputElement).toBeInTheDocument();
    })

    test('Can be able to type in input field',()=>{
        render(<Input />);
        const inputElement = screen.getByPlaceholderText(/enter text/i)
        fireEvent.change(inputElement,{target:{value:"Learn testing"}})
        expect(inputElement.value).toBe("Learn testing")
    })

    test('Button clears input when clicked',()=>{
        render(<Input />);
        const inputElement = screen.getByPlaceholderText(/enter text/i)
        const buttonElement = screen.getByRole("button");
        fireEvent.change(inputElement,{target:{value:"Learn testing"}})
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    })


})