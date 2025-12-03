import { render, screen, fireEvent } from '@solidjs/testing-library';
import { describe, it, expect, beforeEach } from 'vitest';
import Login from './Login';
import { isLoggedIn, logout } from '../stores/auth';

describe('Login', () => {
  beforeEach(() => {
    logout();
  });

  it('renders correctly', () => {
    render(() => <Login />);
    expect(screen.getByText('OpenCode')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
  });

  it('shows error on invalid password', () => {
    render(() => <Login />);
    const input = screen.getByPlaceholderText('password');
    const button = screen.getByText('Login');

    fireEvent.input(input, { target: { value: 'wrong' } });
    fireEvent.submit(button.closest('form')!);

    expect(screen.getByText('Invalid password')).toBeInTheDocument();
  });

  it('logs in on correct password', () => {
    render(() => <Login />);
    const input = screen.getByPlaceholderText('password');
    const button = screen.getByText('Login');

    fireEvent.input(input, { target: { value: 'opencode' } });
    fireEvent.submit(button.closest('form')!);

    expect(isLoggedIn()).toBe(true);
  });
});
