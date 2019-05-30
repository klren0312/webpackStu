import testImg from './test.jpg'
export default function CreateImg () {
  const img = new Image()
  img.src = testImg
  img.className = 'test'
  img.classList.add('test-scss')
  const root = document.getElementById('root')
  root.appendChild(img)
}