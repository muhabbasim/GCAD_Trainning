
// Modern selection methods
const pageTitle = document.getElementById('title')
const titleTow = document.getElementsByClassName('class-title')[1]
const tagName = document.getElementsByTagName('h1')

// Query Selector (most powerful)
const subtitle = document.querySelector('.main-title')
const title = document.querySelector('#title')
const allTitle = document.querySelectorAll('.main-title')

const section = document.querySelector('.content')

// Greate element
const newDiv = document.createElement('div')
newDiv.className = 'new-div underline'
newDiv.innerHTML = '<span style="color:red">Red Title</span>'
newDiv.textContent = "helow world"


const glass = document.createElement('h1')
glass.textContent = "appear"
glass.className = 'open-color'

const btn = document.createElement('button')

btn.style.color = 'blue'
btn.style.backgroundColor = 'yellow'
btn.style.fontSize = '30px'
btn.style.cursor = 'pointer'
btn.textContent = 'Click me'


// evenlistener


btn.addEventListener('click', toggleHide)

function toggleHide(){
  // glass.classList.add("hide")
  // glass.classList.remove("hide")
  glass.classList.toggle("hide")
  console.log('btn clicked')
}

const rmBtn = document.querySelector('#removeBtn')
const article = document.querySelector('#article')

rmBtn.addEventListener('click', () => {
  article.remove()
  // console.log('clicke')
})


const parent = document.querySelector('#parent')
// console.log(parent.children)
// console.log(parent.children[0])
// console.log(parent.firstElementChild)
console.log(parent.lastElementChild)

const lastChiled = parent.lastElementChild



section.appendChild(newDiv)
section.appendChild(btn)
section.appendChild(glass)




// // Creating elements
// document.createElement
// document.createTextNode
// 
// console.log(section)