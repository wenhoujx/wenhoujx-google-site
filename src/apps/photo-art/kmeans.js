const kmeansClustering = (data, k) => {
  const width = data.width
  const height = data.height
  const len = width * height
  var kmeans = []
  for (var i = 0; i < k; i++) {
    kmeans.push(Math.floor(Math.random() * len))
  }
  console.log("centers", kmeans)

  for (var j = 0; j < len; j++) {
    const center = findNearest(j, kmeans, width)
    //console.log("center", center)
    data.data[j * 4] = data.data[center * 4 ]
    data.data[j * 4+1] = data.data[center * 4 +1]
    data.data[j * 4+2] = data.data[center * 4 +2]
    data.data[j * 4+3] = data.data[center * 4 +3]
  }
  console.log("data", data)
  return data
}

const findNearest = (i, kmeans, width) => {
  var smallestI = 0
  var smallest = getDistanceSquare(i, kmeans[0], width)
  for (var j =1; j < kmeans.length ; j++) {
    const distance = getDistanceSquare(i, kmeans[j], width)
    if (distance < smallest) {
      smallest = distance
      smallestI = j
    }
  }
  return kmeans[smallestI]
}
const getDistanceSquare = (i, center, width) => {
  const ix = getX(i, width)
  const iy = getY(i, width)
  const centerx = getX(center, width)
  const centery = getY(center, width)
  return (ix - centerx) ** 2 + (iy - centery) ** 2
}

const getX = (i, width) => {
  return i % width
}

const getY = (i, width) => {
  return Math.floor(i / width)
}

export default kmeansClustering
