AFRAME.registerComponent('dashboard', {
  init: function () {
    // Asset setup
    if (!document.querySelector('#a-dashboard')) {
      const assets = document.querySelector('a-assets')
      const img = document.createElement('img')
      assets.appendChild(img)
      img.src = 'https://aelatgt.net/air-quality-dashboard'
      img.id = 'a-dashboard'
      img.crossOrigin = 'anonymous'
    }

    // Placeholder for auto scaling
    this.el.setAttribute('geometry', null)
    this.el.setAttribute('material', { visible: false })

    this.el.setAttribute('material', {
      src: '#a-dashboard',
      shader: 'flat',
      side: 'double',
    })

    /**
     * When the dashboard image loads, size the plane to the correct aspect
     * and make it visible
     */
    this.el.addEventListener('materialtextureloaded', (e) => {
      const { naturalWidth, naturalHeight } = e.detail.texture.image
      const aspect = naturalWidth / naturalHeight
      this.el.setAttribute('geometry', {
        primitive: 'plane',
        height: 1 / aspect,
      })
      this.el.setAttribute('material', { visible: true })
    })
  },
})
