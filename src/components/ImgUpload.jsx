import React from 'react'

const ImgUpload = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen font-serif">
        <div className="max-w-[1140px] px-4 w-full mx-auto">
          <h1 className='text-center mb-6 text-4xl'>Image Upload</h1>
          <input className='border-2 rounded-lg max-w-[400px] w-full mx-auto flex px-3 py-2' type="file" accept='images/*' />
        </div>
      </div>
    </>
  )
}

export default ImgUpload