    let root = document.getElementById('root');
    let addButton = document.getElementById('add-button');
    let removeButton = document.getElementById('remove-button');
    let todoInput = document.getElementById('todo-input');
    let orderSelect = document.getElementById('order-select');
    let todoItems = [];

    function updateSelectOptions() {
      let length = todoItems.length;
      orderSelect.innerHTML = '';
      for (let i = 0; i < length; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = `항목 ${i + 1}`;
        orderSelect.appendChild(option);
      }
      let lastOption = document.createElement('option');
      lastOption.value = "마지막";
      lastOption.text = "마지막";
      orderSelect.appendChild(lastOption); // Adding 'Last' option at the end of the list
    }
 
    function updateView() {
      root.innerHTML = '';
      for (let i = 0; i < todoItems.length; i++) {
        let itemElement = document.createElement('p');
        itemElement.textContent = `${todoItems[i]}`;
        root.appendChild(itemElement);
      }
      updateSelectOptions();
    }

    function getInputValue() {
      return todoInput.value.trim();
    }

    function getOrder() {
      let orderValue = orderSelect.value;
      if (orderValue === '마지막') {
        return todoItems.length - 1;
      } else {
        return parseInt(orderValue);
      }
    }

    function addItem() {
      let newItem = getInputValue();
      //개행 여백 자르기
      let order = getOrder();
      
      if (newItem !== "") {
        if (order === todoItems.length - 1) {
          todoItems.push(newItem); // Add at the end
        } else {
          todoItems.splice(order, 0, newItem);
        }
        updateView();
        todoInput.value = ''; // Clear input after adding
      } else {
        console.error('할 일을 입력해야 합니다.');
      }
    }

    function removeItem() {
      let order = getOrder();
      if (order >= 0 && order < todoItems.length) {
        todoItems.splice(order, 1);
        updateView();
      } else {
        console.error('유효하지 않은 순서입니다.');
      }
    }

    addButton.addEventListener('click', addItem);
    removeButton.addEventListener('click', removeItem);
    updateSelectOptions(); // Initialize select options