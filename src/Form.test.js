import { render, screen, cleanup } from "@testing-library/react"
import renderer from 'react-test-renderer';
import Form from './Form';



test('should render form component', () => {
  render (<Form/>);
  const FormElement = screen.getByTestId('Form-1');
  expect(FormElement).toBeInTheDocument();
  expect(FormElement).toHaveTextContent('Enter your name:Enter your surname');
})

