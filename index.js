import testImg from './test.jpg'
import createImg from './createImg'
import './index.css'
import style from './index.scss'

createImg()

const img = new Image()
img.src = testImg
img.className = 'test'
img.classList.add(style['test-scss'])
const root = document.getElementById('root')
root.appendChild(img)