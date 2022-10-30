import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import endpoints from '../../utils/endpoints';

import Navbar from './Navbar';

/**
 * Clean up memory after each test by unmounting the DOM
 */
afterEach(cleanup);

describe('navbar tests', () => {
  test('renders navbar text from endpoints correctly', () => {
    render(<Navbar />);

    const buttons: HTMLButtonElement[] = [];

    endpoints.forEach((e) => {
      buttons.push(screen.getByText(e.type));
    });

    buttons.forEach((b) => {
      expect(b).toBeInTheDocument();
    });
  });

  test('navbar is clickable', async () => {
    render(<Navbar />);

    const buttons: HTMLElement[] = [];

    endpoints.forEach(async (e) => {
      buttons.push(await screen.getByText(e.type));
    });

    for (const button in buttons) {
      if (Object.prototype.hasOwnProperty.call(buttons, button)) {
        const b = buttons[button];
        await userEvent.click(b);
      }
    }
  });
});
