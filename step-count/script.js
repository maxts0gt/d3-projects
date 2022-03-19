const data = [
  50, 120, 73, 10, 5, 22, 31, 40, 50, 9, 31, 6, 55, 20, 73, 60, 50, 42, 71, 60,
  15, 50, 11, 41, 20
]

const todaySvg = document.querySelector('svg')

data.forEach((d, i) => {
  const rectTag = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

  rectTag.setAttribute('x', i * 36)
  rectTag.setAttribute('y', 112 - d)
  rectTag.setAttribute('width', 24)
  rectTag.setAttribute('height', d)
  todaySvg.append(rectTag)
})
