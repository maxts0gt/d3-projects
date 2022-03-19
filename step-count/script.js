const data = [550, 120, 731, 600]

const todaySvg = document.querySelector('svg')

data.forEach((d, i) => {
  const rectTag = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

  rectTag.setAttribute('x', '0')
  rectTag.setAttribute('y', i * 45)
  rectTag.setAttribute('width', d)
  rectTag.setAttribute('height', '40')
  todaySvg.append(rectTag)
})
