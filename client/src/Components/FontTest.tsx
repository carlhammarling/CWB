import React from 'react'

const FontTest = () => {
  return (
    <div>
      <h1>Hej</h1>
      <h2>h2</h2>
      <h2 className='radjhani'>h2-tagg <span>med en span</span> </h2>
      <h3>h3</h3>
      <p>p-tagg</p>
      <p className='italic'>p-tagg</p>
      <p className='bold'>p-tagg</p>
      <p className='radjhani'>p-tagg radjhani</p>
      <p className='xs'>p-tagg XS</p>
      <p className='xs bold'>p-tagg XS</p>
      <p className='xsRadjhani'>p-tagg XS radjhani</p>
      <p className='banner'>p-tagg banner <span className='yellow'>yellow</span> och <span className='turquoise'>turquoise</span></p>

    </div>
  )
}

export default FontTest