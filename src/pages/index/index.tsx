import React from 'react'
import { View } from '@tarojs/components'

import './index.scss'


// Test flex box grow only on top

export default function():JSX.Element {
  function eatEvent(e) {
    e.stopPropagation()
  }

  return (
    <View className='container'>
      <View className='noscroll' onTouchMove={eatEvent} onClick={eatEvent} />
    {[...Array(1000).keys()].map(x => {
      return <View className='item' key={x}>{x}</View>
    })
    }
    </View>
  )
}
