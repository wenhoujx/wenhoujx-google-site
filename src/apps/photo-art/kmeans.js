const kmeansClustering = (data, k) => {
  const width = data.width
  const height = data.height
  const len = width * height
  var kmeans = []
  for (var i = 0; i < k; i++) {
    kmeans.push(Math.floor(Math.random() * len))
  }

  const blockSize = 3
  for (var w = 0; w < width; w += blockSize) {
    for (var h = 0; h < height; h += blockSize) {
      const center = findNearest(h * width + w, kmeans, width)
      for (var th = 0; th < blockSize; th++) {
        for (var tw = 0; tw < blockSize; tw++) {
          data.data[((h + th) * width + w + tw) * 4] = data.data[center * 4]
          data.data[((h + th) * width + w + tw) * 4 + 1] = data.data[center * 4 + 1]
          data.data[((h + th) * width + w + tw) * 4 + 2] = data.data[center * 4 + 2]
          data.data[((h + th) * width + w + tw) * 4 + 3] = data.data[center * 4 + 3]
        }
      }
    }
  }
  return data
}

const findNearest = (i, kmeans, width) => {
  var smallestI = 0
  var smallest = getDistanceSquare(i, kmeans[0], width)
  for (var j = 1; j < kmeans.length; j++) {
    const distance = getDistanceSquare(i, kmeans[j], width)
    if (distance < smallest) {
      smallest = distance
      smallestI = j
    }
  }
  return kmeans[smallestI]
}

// l1 distance
const getDistanceSquare = (i, center, width) => {
  const ix = getX(i, width)
  const iy = getY(i, width)
  const centerx = getX(center, width)
  const centery = getY(center, width)
  return Math.abs(ix - centerx) + Math.abs(iy - centery)
}

const getX = (i, width) => {
  return i % width
}

const getY = (i, width) => {
  return Math.floor(i / width)
}

export default kmeansClustering
