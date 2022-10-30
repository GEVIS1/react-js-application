import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

/**
 * Clean up memory after each test by unmounting the DOM
 */
afterEach(cleanup);

describe('header tests', () => {
  test('renders correct navbar icons', async () => {
    render(<Header />);

    const homeButton = await screen.findByTestId('HomeIcon');
    const flashOnButton = await screen.findByTestId('FlashOnIcon');
    const liveTvButton = await screen.findByTestId('LiveTvIcon');
    const videoLibraryButton = await screen.findByTestId('VideoLibraryIcon');
    const searchButton = await screen.findByTestId('SearchIcon');
    const personOutlineButton = await screen.findByTestId('PersonOutlineIcon');
    expect(homeButton).toBeInTheDocument();
    expect(flashOnButton).toBeInTheDocument();
    expect(liveTvButton).toBeInTheDocument();
    expect(videoLibraryButton).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(personOutlineButton).toBeInTheDocument();
  });

  test('renders home label at all times', async () => {
    render(<Header />);

    const homeButton = await screen.findByTestId('HomeIcon');
    const flashOnButton = await screen.findByTestId('FlashOnIcon');
    const liveTvButton = await screen.findByTestId('LiveTvIcon');
    const videoLibraryButton = await screen.findByTestId('VideoLibraryIcon');
    const searchButton = await screen.findByTestId('SearchIcon');
    const personOutlineButton = await screen.findByTestId('PersonOutlineIcon');

    const homeLabel = await screen.findByText('H O M E');

    await userEvent.hover(homeButton);
    await expect(homeLabel).toBeVisible();

    await userEvent.hover(flashOnButton);
    await expect(homeLabel).toBeVisible();

    await userEvent.hover(liveTvButton);
    await expect(homeLabel).toBeVisible();

    await userEvent.hover(videoLibraryButton);
    await expect(homeLabel).toBeVisible();

    await userEvent.hover(searchButton);
    await expect(homeLabel).toBeVisible();

    await userEvent.hover(personOutlineButton);
    await expect(homeLabel).toBeVisible();
  });

  test('renders trending label only when hovered', async () => {
    render(<Header />);

    const homeButton = await screen.findByTestId('HomeIcon');
    const flashOnButton = await screen.findByTestId('FlashOnIcon');
    const liveTvButton = await screen.findByTestId('LiveTvIcon');
    const videoLibraryButton = await screen.findByTestId('VideoLibraryIcon');
    const searchButton = await screen.findByTestId('SearchIcon');
    const personOutlineButton = await screen.findByTestId('PersonOutlineIcon');

    const trendingLabel = await screen.findByText('T R E N D I N G');

    await userEvent.hover(homeButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(flashOnButton);
    await expect(trendingLabel).toBeVisible();

    await userEvent.hover(liveTvButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(videoLibraryButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(searchButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(personOutlineButton);
    await expect(trendingLabel).not.toBeVisible();
  });

  test('renders verified label only when hovered', async () => {
    render(<Header />);

    const homeButton = await screen.findByTestId('HomeIcon');
    const flashOnButton = await screen.findByTestId('FlashOnIcon');
    const liveTvButton = await screen.findByTestId('LiveTvIcon');
    const videoLibraryButton = await screen.findByTestId('VideoLibraryIcon');
    const searchButton = await screen.findByTestId('SearchIcon');
    const personOutlineButton = await screen.findByTestId('PersonOutlineIcon');

    const trendingLabel = await screen.findByText('V E R I F I E D');

    await userEvent.hover(homeButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(flashOnButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(liveTvButton);
    await expect(trendingLabel).toBeVisible();

    await userEvent.hover(videoLibraryButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(searchButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(personOutlineButton);
    await expect(trendingLabel).not.toBeVisible();
  });

  test('renders collections label only when hovered', async () => {
    render(<Header />);

    const homeButton = await screen.findByTestId('HomeIcon');
    const flashOnButton = await screen.findByTestId('FlashOnIcon');
    const liveTvButton = await screen.findByTestId('LiveTvIcon');
    const videoLibraryButton = await screen.findByTestId('VideoLibraryIcon');
    const searchButton = await screen.findByTestId('SearchIcon');
    const personOutlineButton = await screen.findByTestId('PersonOutlineIcon');

    const trendingLabel = await screen.findByText('C O L L E C T I O N S');

    await userEvent.hover(homeButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(flashOnButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(liveTvButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(videoLibraryButton);
    await expect(trendingLabel).toBeVisible();

    await userEvent.hover(searchButton);
    await expect(trendingLabel).not.toBeVisible();

    await userEvent.hover(personOutlineButton);
    await expect(trendingLabel).not.toBeVisible();
  });

  test('renders search label only when hovered', async () => {
    render(<Header />);

    const homeButton = await screen.findByTestId('HomeIcon');
    const flashOnButton = await screen.findByTestId('FlashOnIcon');
    const liveTvButton = await screen.findByTestId('LiveTvIcon');
    const videoLibraryButton = await screen.findByTestId('VideoLibraryIcon');
    const searchButton = await screen.findByTestId('SearchIcon');
    const personOutlineButton = await screen.findByTestId('PersonOutlineIcon');

    const searchLabel = await screen.findByText('S E A R C H');

    await userEvent.hover(homeButton);
    await expect(searchLabel).not.toBeVisible();

    await userEvent.hover(flashOnButton);
    await expect(searchLabel).not.toBeVisible();

    await userEvent.hover(liveTvButton);
    await expect(searchLabel).not.toBeVisible();

    await userEvent.hover(videoLibraryButton);
    await expect(searchLabel).not.toBeVisible();

    await userEvent.hover(searchButton);
    await expect(searchLabel).toBeVisible();

    await userEvent.hover(personOutlineButton);
    await expect(searchLabel).not.toBeVisible();
  });

  test('renders account label only when hovered', async () => {
    render(<Header />);

    const homeButton = await screen.findByTestId('HomeIcon');
    const flashOnButton = await screen.findByTestId('FlashOnIcon');
    const liveTvButton = await screen.findByTestId('LiveTvIcon');
    const videoLibraryButton = await screen.findByTestId('VideoLibraryIcon');
    const searchButton = await screen.findByTestId('SearchIcon');
    const personOutlineButton = await screen.findByTestId('PersonOutlineIcon');

    const searchLabel = await screen.findByText('A C C O U N T');

    await userEvent.hover(homeButton);
    await expect(searchLabel).not.toBeVisible();

    await userEvent.hover(flashOnButton);
    await expect(searchLabel).not.toBeVisible();

    await userEvent.hover(liveTvButton);
    await expect(searchLabel).not.toBeVisible();

    await userEvent.hover(videoLibraryButton);
    await expect(searchLabel).not.toBeVisible();

    await userEvent.hover(searchButton);
    await expect(searchLabel).not.toBeVisible();

    await userEvent.hover(personOutlineButton);
    await expect(searchLabel).toBeVisible();
  });
});
