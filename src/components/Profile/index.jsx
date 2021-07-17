import React from 'react';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Avatar from '../Avatar';

const Profle = () => {
    const {
        site: { 
            siteMetadata: { title, position, description } }
    } = useStaticQuery(graphql`
    query MyQuery {
        site {
            siteMetadata {
                description
                position
                title
            }
        }
    }
   
`)
    return ( 
        <div className="Profile-wrapper">
            <Avatar/>
            <h1>{title}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
     );
}
 
export default Profle;
