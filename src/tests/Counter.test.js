
// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from "@testing-library/user-event"


beforeEach(() => {
  // Render the Counter component here
  render(<Counter initialCount={0} />);

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  //const initialCount = screen.getByText(/count: 0/i);
  //expect(initialCount).toBeInTheDocument();
  const initCounter = screen.getByText(/0/i);
  expect(initCounter).toBeInTheDocument();

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  const countDisplay = screen.getByTestId("count");  

  userEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent("1");

  //const initialCount = screen.getByText(/count: 0/i);

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  //const initialCount = screen.getByText(/count: 0/i);
  const countDisplay = screen.getByTestId("count");
  
  userEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent("-1");
  
});
