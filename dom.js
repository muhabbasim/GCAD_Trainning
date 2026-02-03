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
newDiv.innerHTML = 'hello world'

section.appendChild(newDiv)
// document.body.appendChild(newDiv)


// // Creating elements
// document.createElement
// document.createTextNode

console.log(section)