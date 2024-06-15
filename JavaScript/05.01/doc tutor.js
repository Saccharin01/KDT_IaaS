function clickElement(clickTriggerElement, targetElement, someText) {
  function someEvent(targetElement, someText) {
    targetElement.textContent = someText;
  }
  clickTriggerElement.addEventListener('click',someEvent(targetElement, someText));
};
const elements = {
  triggerElement : {},
  targetElement : {},
  someText : "",
}

/**
 * * 메인 구동 함수는 세 개의 매개 변수를 가지게 된다
 * * 객체로 만들어놓고 그걸 사용한다고?
 * *
 */

clickElement(elements.triggerElement, elements.targetElement, elements.someText);