const rectTags = document.querySelectorAll('rect')

const data = [550, 120, 731]

rectTags.forEach((tag, i) => {
  const width = data[i]
  tag.setAttribute('width', width + 'px')
})
