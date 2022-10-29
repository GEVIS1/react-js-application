/**
 * The Navbar component holds buttons intended to change the category of movies displayed in the dashboard component.
 * In this component styling is done with a SASS module import (Mark Makes Stuff, n.d.).
 */

import { Button, ButtonGroup } from '@mui/material';

import styles from './Navbar.module.sass';

const Navbar: React.FC = () =>
  <ButtonGroup disableRipple className={styles.ButtonGroup}>
    <Button className={styles.Button}>One</Button>
    <Button className={styles.Button}>Two</Button>
    <Button className={styles.Button}>Three</Button>
  </ButtonGroup>
;

export default Navbar;
