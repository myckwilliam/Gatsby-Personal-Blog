import styled from 'styled-components'
import { Link } from 'gatsby'
 
export const MenuBarWrapper = styled.aside`
    width: 3.75;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-left: 1px solid #38444d;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;
`

export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenuBarLink = styled(Link)`
    display: block;
`

export const MenuBarItem = styled.span`
    color: #8899a6;
    cursor: pointer;
    display: block;
    height: auto;
    padding: 1.1rem;
    position: relative;
    width: 2rem;
    &:hover {
        color: #1fa1f2;
    }
`