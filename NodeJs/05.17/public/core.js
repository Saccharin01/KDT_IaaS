const root = document.querySelector(`#root`)
console.log(root)


for (let i = 0; i < 2; i++){
  const div = document.createElement(`div`);
  root.appendChild(div)
}
  

let div = document.createElement(`div`)
let form = document.createElement(`form`)


root.children[0].appendChild(form)
root.children[0].appendChild(div)

root.children[0].style.display = "flex"
root.children[0].style.width = "80vw"

root.children[0].children[1].style.height = `100px`
root.children[0].children[1].style.width = `100px`
root.children[0].children[1].style.backgroundColor = `red`

// root.children[0].children[1].addEventListener()

let input = document.createElement(`input`)
form.appendChild(input)
form.setAttribute(`method`, 'GET')
input.setAttribute('name', 'username')
input.setAttribute('placeholder', '이름을 입력하세요')
input.setAttribute('type','text')
input.style.width = `500px`
