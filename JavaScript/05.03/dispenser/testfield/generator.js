import { item } from "./testfield/data.js"
export default function () {
  let itemEle = Object.entries(item)
for(let i = 0; i < itemEle.length; i++){

  let makeDiv = document.createElement('div');
  root.appendChild(makeDiv);
  root.children[i].innerHTML = `${itemEle[i][0]}\n${itemEle[i][1]}`;
}

}