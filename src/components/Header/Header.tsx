/**
 * The header component renders six icon components from material-ui/icons and sits at the top of the page
 */

import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from '@mui/icons-material';

const Header: React.FC = () =>
  <div className="wrapper">
    <div className="icon home" data="H O M E">
      <Home />
    </div>
    <div className="icon flash-on" data="T R E N D I N G">
      <FlashOn />
    </div>
    <div className="icon live-tv" data="V E R I F I E D">
      <LiveTv />
    </div>
    <div className="icon video-library" data="A C C O U N T">
      <VideoLibrary />
    </div>
    <div className="icon search" data="S E A R C H">
      <Search />
    </div>
    <div className="icon person-outline" data="C O L L E C T I O N S">
      <PersonOutline />
    </div>
  </div>
;
export default Header;
