AFRAME.registerComponent('dashboard', {
  init: function () {
    const { naturalWidth, naturalHeight } = img
    const aspect = naturalWidth / naturalHeight
    this.el.setAttribute('geometry', {
      primitive: 'plane',
      width: aspect,
      height: 1,
    })
    this.el.setAttribute('material', {
      shader: 'flat',
      side: 'double',
      src: img,
    })
  },
})

/**
 * We have to use the asset management system or the image
 * won't load properly for pinned objects
 */
const img = document.createElement('img')
img.src = 'https://aelatgt.net/air-quality-dashboard'
img.crossOrigin = 'anonymous'
document.querySelector('a-assets').appendChild(img)
