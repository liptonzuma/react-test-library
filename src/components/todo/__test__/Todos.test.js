import { render, screen,fireEvent } from '@testing-library/react';
import Input from '../../input/Input'

    test('renders placeholder text', async () => {
        render(<Input  />);
        const inputElement = screen.getByPlaceholderText(/enter text/i);
        const buttonElement = screen.getByRole("button");
        const listItemsElement = screen.getByRole("list")

        fireEvent.change(inputElement,{target:{value:/take a nap/i}})
        fireEvent.click(buttonElement)

        expect(listItemsElement).toBeInTheDocument()
    })