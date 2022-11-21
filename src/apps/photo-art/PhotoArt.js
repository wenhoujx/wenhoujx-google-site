import Canvas from "./Canvas"
// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react'
import pho from "./images/IMG-1949.jpg"
import kmeansClustering from "./kmeans"
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'

const width = 400
const maxK = 2000
const minK = 50

const PhotoArt = () => {
  const [kmeans, setKmeans] = useState(Math.floor((maxK - minK) / 2))

  const changeKmeansSlider = (e) => {
    setKmeans(Math.floor((e.target.value / 100 * (maxK - minK) + minK)))
  }

  const drawOriginal = (ctx) => {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const image = new Image();
    image.src = pho

    image.onload = function () {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      image.height = image.height / image.width * width
      image.width = width
      ctx.canvas.width = image.width;
      ctx.canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);
    }
  }

  const drawKmeans = (ctx) => {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const image = new Image();
    image.src = pho

    image.onload = function () {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      image.height = image.height / image.width * width
      image.width = width
      ctx.canvas.width = image.width;
      ctx.canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);
      var data
      try {
        data = ctx.getImageData(0, 0, image.width, image.height);
      } catch (e) {
        console.log("not rbg")
      }
      data = kmeansClustering(data, kmeans)
      ctx.putImageData(data, 0, 0)
    }
  }

  return (
    <Stack gap={2}
      className='mt-2 d-flex align-items-center'>
      <Form.Label>Use Slider to Control Resolution: {kmeans}</Form.Label>
      <Form.Range onChange={changeKmeansSlider} />

      <Stack direction="horizontal"
        className="d-flex justify-content-around">
        <Canvas draw={drawOriginal} />
        <Canvas draw={drawKmeans} />
      </Stack>
    </Stack >
  )
}

export default PhotoArt
