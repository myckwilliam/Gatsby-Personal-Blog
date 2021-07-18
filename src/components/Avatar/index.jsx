import React from 'react';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
    const { data } = useStaticQuery(
        graphql`
        query {
            data: file(relativePath: { eq: "pp.png"}) {
              childImageSharp{
                  fixed(width: 60, height: 60) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
                } 
            }
        }`
    )

    return ( 
        <S.AvatarWrapper fixed={data.childImageSharp.fixed} />
     );
}
 
export default Avatar;