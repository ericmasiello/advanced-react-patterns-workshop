import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Nav.scss'

export function NavList(props) {
  const { as: Tag, className, ...rest } = props
  const classes = classNames('nav-list', className)
  return <Tag className={classes} {...rest} />
}

NavList.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

NavList.defaultProps = {
  as: 'ul',
}

export function NavItem(props) {
  const { as: Tag, className, ...rest } = props
  const classes = classNames('nav-item', className)
  return <Tag className={classes} {...rest} />
}

NavItem.propTypes = {
  as: PropTypes.elementType,
}

NavItem.defaultProps = {
  as: 'li',
}

export function NavLink(props) {
  const { as: Tag, className, ...rest } = props
  const classes = classNames('nav-link', className)
  return <Tag className={classes} {...rest} />
}

NavLink.propTypes = {
  as: PropTypes.elementType,
}

NavLink.defaultProps = {
  as: 'a',
}
