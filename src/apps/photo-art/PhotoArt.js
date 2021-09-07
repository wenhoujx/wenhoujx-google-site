import Canvas from "./Canvas"
import React, { useState, useCallback } from 'react'
import pho from "./images/IMG-1949.jpg"
import { Box, Flex, Text, Input, Slider } from "theme-ui"
import kmeansClustering from "./kmeans"

const width = 400
const maxK = 2000
const minK = 50

const PhotoArt = () => {
  const [image, setImage] = useState()
  const [kmeans, setKmeans] = useState(30)

  const changeKmeansSlider = (e) => {
    setKmeans(e.target.value)
  }
  const handleImageUpload = (e) => {
    const filesToUpload = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result)
      console.log("image", e.target.result)
    }
    reader.readAsDataURL(filesToUpload);
  }

  const drawOriginal = (ctx) => {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const image = new Image();
    image.src = pho

    image.onload = function() {
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

    image.onload = function() {
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
      ctx.putImageData(data, 0,0)
    }
  }

  return (
    <Flex p={2} sx={{
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Box p={2}>
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
      </Box>
      <Box p={2}>Select art style here</Box>
      <Text>Result</Text>
      <Flex>
        <Box p={2}>
          <Canvas draw={drawOriginal} />
        </Box>
        <Box p={2}>
          <Canvas draw={drawKmeans} />
        </Box>

      </Flex>
      <Box p={100}>
        <Slider defaultValue={100} max={maxK} min={minK} onChange={changeKmeansSlider} />
        <Text>{kmeans}</Text>
      </Box>
    </Flex>
  )
}

export default PhotoArt
