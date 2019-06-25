import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Menu.scss'

const MenuOpenContext = createContext({ open: false, toggle: () => {} })

export const useMenu = () => useContext(MenuOpenContext)

export function MenuProvider(props) {
  const { children } = props
  const [open, setOpen] = useState(false)
  const toggle = useCallback(() => setOpen(oldOpen => !oldOpen), [])
  const value = useMemo(() => ({ open, toggle }), [open, toggle])

  // TODO: Add matchMedia logic to dynamically update the aria-hidden value

  return (
    <MenuOpenContext.Provider value={value}>
      {children}
    </MenuOpenContext.Provider>
  )
}

export function MenuToggle(props) {
  const { children, tag: Tag, onClick, className, ...rest } = props
  const { toggle } = useMenu()
  const handleOnClick = event => {
    toggle()
    if (onClick) {
      onClick(event)
    }
  }
  const classes = classNames('menu-toggle', className)

  return (
    <Tag onClick={handleOnClick} className={classes} {...rest}>
      {children}
    </Tag>
  )
}

MenuToggle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

MenuToggle.defaultProps = {
  tag: 'button',
}

export function Menu(props) {
  const { children, tag: Tag, className, ...rest } = props
  const { open } = useMenu()
  const classes = classNames('menu', className)

  return (
    <Tag aria-hidden={!open} className={classes} {...rest}>
      {children}
    </Tag>
  )
}

Menu.propTypes = {
  tag: PropTypes.elementType,
}

Menu.defaultProps = {
  tag: 'nav',
}
