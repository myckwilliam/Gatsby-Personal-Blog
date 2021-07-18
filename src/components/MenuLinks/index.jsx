import React from 'react';

import * as S from './styled'
import links from'./contents'

const MenuLinks = () => {
    return ( 
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <S.MenuLinksLink activeStyle={{color: '#1fa1f2'}} to={link.url}>{link.label}</S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
     );
}
 
export default MenuLinks;