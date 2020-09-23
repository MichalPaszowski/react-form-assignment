import React from 'react';
import { render, fireEvent, getByText, getByTestId, getByLabelText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { LoginForm }  from './pages/loginForm';

test('renders login form', () => {
  const { getByText } = render(<LoginForm />);
  const welcome = getByText(/welcome/i);
  expect(welcome).toBeInTheDocument();
});

describe('tests login form validation', () => {
  describe('invalid email', () => {
    it('calls submit with invalid email', async function() {
      const mockOnSubmit = jest.fn();
      const { container, getByText } = render(<LoginForm onSubmit={mockOnSubmit}/>); 

      await act( async() => {
        const email = container.querySelector('#email');

        fireEvent.input(email, {
          target: {
            value: 'test'
          }
        });
      });

      await act( async() => {
        const submit = container.querySelector('#submit');
        fireEvent.click(submit);
      });


      const invalidEmail = getByText('invalid email');
      expect(invalidEmail).toBeInTheDocument()
    });
  });

  describe('invalid password', () => {
    it('calls submit with invalid password', async function() {
      const mockOnSubmit = jest.fn();
      const { container, getByText } = render(<LoginForm onSubmit={mockOnSubmit}/>); 

      await act( async() => {
        const email = container.querySelector('#email');

        fireEvent.input(email, {
          target: {
            value: 'test@test.pl'
          }
        });
      });

      await act( async() => {
        const password = container.querySelector('#password');

        fireEvent.input(password, {
          target: {
            value: 'TTTttt1'
          }
        });
      });

      await act( async() => {
        const submit = container.querySelector('#submit');
        fireEvent.click(submit);
      });


      const invalidEmail = getByText('invalid email or password');
      expect(invalidEmail).toBeInTheDocument()
    });

    it('calls submit with invalid password - too short', async function() {
      const mockOnSubmit = jest.fn();
      const { container, getByText } = render(<LoginForm onSubmit={mockOnSubmit}/>); 

      await act( async() => {
        const email = container.querySelector('#email');

        fireEvent.input(email, {
          target: {
            value: 'test@test.pl'
          }
        });
      });

      await act( async() => {
        const password = container.querySelector('#password');

        fireEvent.input(password, {
          target: {
            value: 'TTT'
          }
        });
      });

      await act( async() => {
        const submit = container.querySelector('#submit');
        fireEvent.click(submit);
      });


      const invalidEmail = getByText('invalid password');
      expect(invalidEmail).toBeInTheDocument()
    });
  });
});