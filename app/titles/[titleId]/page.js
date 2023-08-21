import PostDetails from '@/app/components/PostDetails';
import React, { Suspense } from 'react'

const page =  async({params}) => {
  // to get the id that user will write
    const {titleId} = params ;
    const loading = <div>
      <h4>Loading...</h4>
    </div>

  return (
    <>
    <h1>Post details</h1>
    <Suspense fallback={loading}>
    <PostDetails titleId={titleId}/>
    </Suspense>
    </>
  )
}

export default page