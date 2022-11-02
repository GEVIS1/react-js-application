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
    render(<Navbar category={'Trending'} setCategory={() => null} />);

    const buttons: HTMLButtonElement[] = [];

    endpoints.forEach((e) => {
      buttons.push(screen.getByText(e.type));
    });

    buttons.forEach((b) => {
      expect(b).toBeInTheDocument();
    });
  });

  test('navbar is clickable', async () => {
    render(<Navbar category={'Trending'} setCategory={() => null} />);

    const buttons: HTMLElement[] = [];

    /**
     * Put all buttons in an array for testing
     */
    endpoints.forEach(async (e) => {
      const b = await screen.getByText(e.type);

      /**
       * Check default classes
       */
      if (e.type === 'Trending') {
        expect(b).toHaveClass('SelectedButton');
        expect(b).not.toHaveClass('Button');
      } else {
        expect(b).toHaveClass('Button');
        expect(b).not.toHaveClass('SelectedButton');
      }

      buttons.push(b);
    });

    /**
     * Check that classes are correctly applied as they are clicked
     */
    for (const button in buttons) {
      if (Object.prototype.hasOwnProperty.call(buttons, button)) {
        const b = buttons[button];
        await userEvent.click(b);
        expect(b).toHaveClass('SelectedButton');
        expect(b).not.toHaveClass('Button');
      }
    }
  });
});
