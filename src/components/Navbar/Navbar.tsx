/**
 * The Navbar component holds buttons intended to change the category of movies displayed in the dashboard component.
 * In this component styling is done with a SASS module import (Mark Makes Stuff, n.d.).
 */

import { Button, ButtonGroup } from '@mui/material';
import endpoints from '../../utils/endpoints';

import styles from './Navbar.module.sass';

const Navbar: React.FC = () =>
  <ButtonGroup disableRipple className={styles.ButtonGroup}>
    {endpoints.map((endpoint) =>
      <Button key={endpoint.type} className={styles.Button}>
        {endpoint.type}
      </Button>
    )}
  </ButtonGroup>
;
export default Navbar;
