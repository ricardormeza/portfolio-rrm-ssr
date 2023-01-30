import React from 'react'
import { sanityClient } from '../../utils/client'

function pageInfo({pageInfo}) {
    console.log('yes');
    console.log(pageInfo);
  return (
    <div>
        <h1>{pageInfo.name}</h1>
        <div>
            
        </div>
    </div>
  )
}

export default pageInfo

export const getServerSideProps = async () => {
    const pageInfo = await sanityClient.fetch('*[_type == "pageInfo"][0]');

    return{
        props:{pageInfo}
    }
}