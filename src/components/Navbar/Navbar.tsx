/**
 * The Navbar component holds buttons intended to change the category of movies displayed in the dashboard component.
 * In this component styling is done with a SASS module import (Mark Makes Stuff, n.d.).
 */

import { Button, ButtonGroup } from '@mui/material';
import { Dispatch } from 'react';
import endpoints, { Category } from '../../utils/endpoints';

import styles from './Navbar.module.sass';

interface INavbarProps {
  setCategory: Dispatch<React.SetStateAction<Category>>;
  category: Category;
}

const Navbar: React.FC<INavbarProps> = ({ category, setCategory }) =>
  <ButtonGroup disableRipple className={styles.ButtonGroup}>
    {endpoints.map((endpoint) =>
      <Button
        key={endpoint.type}
        className={
          category === endpoint.type ? styles.SelectedButton : styles.Button
        }
        onClick={() => setCategory(endpoint.type)}
      >
        {endpoint.type}
      </Button>
    )}
  </ButtonGroup>
;
export default Navbar;
