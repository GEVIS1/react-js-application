/**
 * The header component renders six icon components from material-ui/icons and sits at the top of the page.
 * In the header component I have decided to use styled components for the styling of everything.
 */

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
  Container as ContainerOrig,
  styled,
} from '@mui/material';

/**
 * Style the background colour of the container
 */
const Container = styled(ContainerOrig)({
  backgroundColor: 'transparent',
});

/**
 * Style the background colour of the bottomnavigationaction and the colour of the label text
 */
const BottomNavigationAction = styled(BottomNavigationActionOrig)({
  backgroundColor: 'transparent',
  '& .MuiBottomNavigationAction-label': {
    color: 'white',
  },
});

/**
 * Style the background colour of the bottomnavigation and the colour of the label text
 */
const BottomNavigation = styled(BottomNavigationOrig)({
  backgroundColor: 'transparent',
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

const Header: React.FC = () => {
  return (
    <Container color="transparent">
      <BottomNavigation>
        <BottomNavigationAction
          disableRipple
          showLabel={true}
          label="Home"
          icon={<Home />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={false}
          label="Trending"
          icon={<FlashOn />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={false}
          label="Verified"
          icon={<LiveTv />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={false}
          label="Account"
          icon={<VideoLibrary />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={false}
          label="Search"
          icon={<Search />}
        />
        <BottomNavigationAction
          disableRipple
          showLabel={false}
          label="Collections"
          icon={<PersonOutline />}
        />
      </BottomNavigation>
    </Container>
  );
};
export default Header;
