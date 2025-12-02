import { render, screen, fireEvent } from '@solidjs/testing-library';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Settings from './Settings';
import { updateTheme, updateApiEndpoint } from '../stores/config';

describe('Settings', () => {
  beforeEach(() => {
    localStorage.clear();
    // Reset store to default
    updateApiEndpoint('');
    updateTheme('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    vi.clearAllMocks();
  });

  it('reverts theme on close if not saved', async () => {
    // Setup: configure endpoint so Close button appears
    updateApiEndpoint('http://localhost:1234');
    const onClose = vi.fn();

    const { unmount } = render(() => <Settings onClose={onClose} />);

    // Check initial theme
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');

    // Change theme
    const select = screen.getByLabelText('Theme');
    fireEvent.change(select, { target: { value: 'light' } });

    // Check preview applied
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');

    // Click Close
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();

    // Simulate unmount (parent hides component)
    unmount();

    // Check if reverted (this assertion should fail currently)
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });
});
