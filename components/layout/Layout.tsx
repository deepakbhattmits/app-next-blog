import { FC } from 'react'

import MainNavigation from './MainNavigation'

const Layout: FC = ({ children }): JSX.Element => (
  <>
    <MainNavigation />
    <main>{children}</main>
  </>
)

export default Layout
