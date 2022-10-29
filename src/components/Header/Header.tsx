/**
 * The header component renders six icon components from material-ui/icons and sits at the top of the page.
 * In the header component I have decided to use styled components for the styling of everything.
 */

import { useState } from 'react';
import {
  FlashOn as FlashOnOrig,
  Home as HomeOrig,
  LiveTv as LiveTvOrig,
  PersonOutline as PersonOutlineOrig,
  Search as SearchOrig,
  VideoLibrary as VideoLibraryOrig,
} from '@mui/icons-material';
import {
  BottomNavigation as BottomNavigationOrig,
  BottomNavigationAction as BottomNavigationActionOrig,
  Box as BoxOrig,
  styled,
} from '@mui/material';

/**
 * Style the background colour of the Box
 */
const Box = styled(BoxOrig)({
  backgroundColor: 'transparent',
  justifyContent: 'flex-start',
});

/**
 * Style the background colour of the BottomNavigationAction and the colour of the label text
 */
const BottomNavigationAction = styled(BottomNavigationActionOrig)({
  backgroundColor: 'transparent',
  //maxWidth: '80px',
  maxWidth: '7vw',
  '& .MuiBottomNavigationAction-label': {
    color: 'white',
    fontSize: '0.65em',
    whiteSpace: 'nowrap',
    // Thanks Grayson!
    fontFamily:
      '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif;',
  },
});

/**
 * Style the background colour of the BottomNavigation and the colour of the label text
 */
const BottomNavigation = styled(BottomNavigationOrig)({
  backgroundColor: 'transparent',
  justifyContent: 'flex-start',
});

/**
 * Style all icons to be white
 */
const [Home, FlashOn, LiveTv, VideoLibrary, Search, PersonOutline] =
  Object.values([
    HomeOrig,
    FlashOnOrig,
    LiveTvOrig,
    VideoLibraryOrig,
    SearchOrig,
    PersonOutlineOrig,
  ]).map((value) =>
    styled(value)({
      color: 'white',
    })
  );

type SetHoveredArg =
  | 'Trending'
  | 'Verified'
  | 'Account'
  | 'Search'
  | 'Collections'
  | null;

const Header: React.FC = () => {
  const [showTrending, setShowTrending] = useState(false);
  const [showVerified, setShowVerified] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCollections, setShowCollections] = useState(false);

  /**
   * Function to set the showLabel boolean on a particular icon
   * @param icon Name of the icon whose label to show
   */
  const setHovered = (icon: SetHoveredArg) => {
    setShowTrending(false);
    setShowVerified(false);
    setShowAccount(false);
    setShowSearch(false);
    setShowCollections(false);
    switch (icon) {
      case 'Trending':
        setShowTrending(true);
        break;
      case 'Verified':
        setShowVerified(true);
        break;
      case 'Account':
        setShowAccount(true);
        break;
      case 'Search':
        setShowSearch(true);
        break;
      case 'Collections':
        setShowCollections(true);
        break;
      default:
        break;
    }
  };

  return (
    <Box color="transparent">
      <BottomNavigation onMouseLeave={() => setHovered(null)}>
        <BottomNavigationAction
          disableRipple
          showLabel={true}
          label="H O M E"
          icon={<Home />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={showTrending}
          onPointerOver={() => setHovered('Trending')}
          label="T R E N D I N G"
          icon={<FlashOn />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={showVerified}
          onPointerOver={() => setHovered('Verified')}
          label="V E R I F I E D"
          icon={<LiveTv />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={showAccount}
          onPointerOver={() => setHovered('Account')}
          label="C O L L E C T I O N S"
          icon={<VideoLibrary />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={showSearch}
          onPointerOver={() => setHovered('Search')}
          label="S E A R C H"
          icon={<Search />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={showCollections}
          onPointerOver={() => setHovered('Collections')}
          label="A C C O U N T"
          icon={<PersonOutline />}
        />
      </BottomNavigation>
    </Box>
  );
};
export default Header;
