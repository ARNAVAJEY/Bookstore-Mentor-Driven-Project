import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords}/>
            
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to BookerMan',
    description: 'We sell the best Web development Books',
    keywords: 'Books, WebDev Books, Best Prices',
}

export default Meta
