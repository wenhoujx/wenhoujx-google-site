import React, { useRef, useEffect } from 'react'

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
const useCanvas = draw => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const render = () => {
      draw(context)
    }
    render()
  }, [draw])

  return canvasRef
}
const Canvas = props => {
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw)

  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas
