/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <div className="Header-banner">
            <Navigation className="Header-nav" />
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
