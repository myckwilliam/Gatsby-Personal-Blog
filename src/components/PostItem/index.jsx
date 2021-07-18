import React from 'react';

import * as S from './styled'

const PostItem = () => {
    return ( 
        <S.PostItemLink>
            <S.PostItemWrapper>
                <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
                <S.PostItemInfo>
                    <S.PostItemDate>18 de Julho de 2021</S.PostItemDate>
                    <S.PostItemTitle>Coisas Estranhas</S.PostItemTitle>
                    <S.PostItemDescription>
                        Algumas razões para você ter sua própria plataforma ao invés de
                        soluções como o Medium.
                    </S.PostItemDescription>
                </S.PostItemInfo>
            </S.PostItemWrapper>
        </S.PostItemLink>
     );
}
 
export default PostItem;