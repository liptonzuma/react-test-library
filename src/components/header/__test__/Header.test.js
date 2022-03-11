import { render, screen } from '@testing-library/react';
import Header from '../Header.jsx';

test('renders Test Started', () => {
  render(<Header header={"Test Started"} />);
  const header = screen.getByText(/test started/i);
  expect(header).toBeInTheDocument();
});

// test tag or role 

test('Renders an h-tag',()=>{
    render(<Header header={"Testing going smoothly"} /> );
    const hTag = screen.getByRole("heading");
    expect(hTag).toBeVisible()
})

it("must be uppercase",()=>{
  render(<Header header={"Hello world"} />)

  const hTag = screen.getByRole("heading")
  expect(hTag).toHaveStyle('text-transform:uppercase')
})