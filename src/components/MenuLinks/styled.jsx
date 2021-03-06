import styled from 'styled-components'

import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
`

export const MenuLinksItem = styled.li`
    padding: .5rem 0;
    
`

export const MenuLinksLink = styled(Link)`
    color: #8899a6;
    text-decoration: none;

    &:hover {
        color: #1fa1f2;
    }

`