import Sidebar from '../Sidebar'
import MenuBar from '../Menubar'
import PostItem from '../PostItem'

import * as React from "react"
import PropTypes from "prop-types"

import GlobalStyles from '../../styles/global'

import * as S from './styled'

const Layout = ({ children }) => {

  return (
        <S.LayoutWrapper>
          <GlobalStyles/>
          <Sidebar /> 
          <MenuBar />
          <S.LayoutMain>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </S.LayoutMain>
        </S.LayoutWrapper>
  )  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
