import '../components/dashboard.js'
import '../components/single-action-button.js'

const baseURL = 'https://mattrossman.github.io/hubs-air-quality/src/'

const components = ['dashboard', 'single-action-button']
components.map((name) => AFRAME.GLTFModelPlus.registerComponent(name, name))

/**
 * Create a plane with a button label for spawning a dashboard
 */
const spawner = document.createElement('a-entity')
spawner.setAttribute('geometry', { primitive: 'plane', height: 0.3 })
spawner.setAttribute('material', { color: 'red', side: 'double' })
spawner.setAttribute('text', {
  value: 'Spawn Dashboard',
  align: 'center',
  wrapCount: '18',
})
spawner.object3D.position.y = 1.5
spawner.object3D.scale.setScalar(0.5)
APP.scene.appendChild(spawner)

/**
 * Add interaction and spawning logic
 */
spawner.setAttribute('single-action-button', { emit: 'click' })
spawner.addEventListener('click', () => {
  const entityURL = baseURL + '/entities/dashboard.glb'
  APP.scene.emit('add_media', entityURL)
})
