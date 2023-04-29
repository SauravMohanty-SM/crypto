import React from 'react'
import { Spin } from 'antd'

const Loader = () => {
  return (
    <div className='loader'>
        <Spin size='large' tip="Fetching"></Spin>
    </div>
  )
}

export default Loader