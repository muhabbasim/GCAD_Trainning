
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
// console.log(parent.lastElementChild)

const lastChiled = parent.lastElementChild



const form = document.querySelector("#form")
const input = document.querySelector("#email")
const output = document.querySelector("#output")

// form.addEventListener('submit', (even) => {
//   even.preventDefault()
//   if (input.value) {
//     output.textContent = input.value 
//     console.log('value submited')
//   } else {
//     console.log('no value')
//   }
// })

// input.addEventListener('keydown', (event) => {
//   // console.log(event.target.value)
// })

section.appendChild(newDiv)
section.appendChild(btn)
section.appendChild(glass)


// Promise && async await 

const user = {
  name: 'Omar',
  email: 'Omar@gmail.com',
  age: '23',
}

// one promise

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(user)
  }, 4000)
})

form.addEventListener('submit', (even) => {
  even.preventDefault()
  try {
    if(input.value) {
      fetchData
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => console.log('We Done'))
    } else {
      console.log('input has no value')
    }
  } catch (error) {
    console.log(error)
  }
})


function step1() {
  return Promise.resolve('Step 1 done')
}

function step2(msg) {
  return Promise.resolve(msg + ' → Step 2 done')
}

// promise chaining
// step1().then(step2).then(console.log)

// async await 
async function runSteps() {

  try {
    const step1Res = await step1()
    const step2Res = await step2(step1Res)
    console.log(step2Res)
    
  } catch (error) {
    console.log('error', error)
  }
}

// runSteps()





const incBut = document.querySelector(".incremant")
const decBut = document.querySelector(".decrement")
const deleteBut = document.querySelector(".delete-btn")
const calcOutput = document.querySelector(".calc-output")
const put = document.querySelector(".calc-output")

const localStorageValue = localStorage.getItem('input-number')


let inputNumber = Number(localStorageValue)
calcOutput.textContent = inputNumber

incBut.addEventListener('click', increaseBut)
decBut.addEventListener("click", decrmentBut) 
deleteBut.addEventListener("click", deleteBtn) 

function increaseBut() {
  // inputNumber = inputNumber + 1
  inputNumber += 1
  calcOutput.textContent = inputNumber
  localStorage.setItem('input-number', inputNumber)
}

function decrmentBut() {
  inputNumber -= 1
  calcOutput.textContent = inputNumber
  localStorage.setItem('input-number', inputNumber)
  
}

function deleteBtn() {
  inputNumber = 0
  calcOutput.textContent = 0
  localStorage.setItem('input-number', inputNumber)
}
