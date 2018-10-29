import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem, withStyles } from '@material-ui/core';
import '@fortawesome/fontawesome-free/css/all.css';

import Favorite from '@material-ui/icons/Favorite';

import footerStyle from 'design-system/assets/jss/material-kit-react/components/footerStyle.jsx';

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {(props.icons || []).map(({ icon, url }, i) => (
              <ListItem className={classes.inlineBlock}>
                <a
                  href={url}
                  className={classes.block}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={icon} style={{fontSize: 20}} />
                </a>
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.right}>
          Made with <Favorite className={classes.icon} /> by{' '}
          <a
            href="https://www.creative-tim.com"
            className={aClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            Oreochip
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
