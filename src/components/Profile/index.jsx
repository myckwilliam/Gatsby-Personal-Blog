import React from 'react';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Avatar from '../Avatar';

import * as S from './styled'

const Profle = () => {
    const {
        site: { 
            siteMetadata: { author, position, description } }
    } = useStaticQuery(graphql`
    query MyQuery {
        site {
            siteMetadata {
                description
                position
                author
            }
        }
    }
   
`)
    return ( 
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar/>
                <S.ProfileAuthor>
                    {author}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
     );
}
 
export default Profle;
