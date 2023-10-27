// **** Select Items ****

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const submitBtn = document.querySelector(".submit-btn");
const grocery = document.getElementById("grocery");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// set edit item info
let editElement;
let editID = "";
let editFlag = false;

// **** Event Listeners ****

// submit-btn
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setUpItems);
// **** Functions ****

function addItem(e) {
  e.preventDefault();
  const id = new Date().getTime().toString();
  const value = grocery.value;
  if (value && !editFlag) {
    //   create grocery-item
    createListItem(id, value);
    alertDisplay("Item Added", "success");
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.textContent = value;
    alertDisplay("Value changed", "success");
    // edit local stroage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    alertDisplay("Please enter value", "danger");
  }
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  list.removeChild(element);
  const items = document.querySelectorAll(".grocery-item");
  if (items.length == 0) {
    container.classList.remove("show-container");
  }
  setBackToDefault();
  alertDisplay("Item removed", "danger");
  removeFromLocalStorage(element.dataset.id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.textContent;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
  editFlag = true;
}

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  container.classList.remove("show-container");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  alertDisplay("Cleared Items", "success");
  setBackToDefault();
  localStorage.removeItem("list");
}

function setBackToDefault() {
  grocery.value = "";
  submitBtn.textContent = "Add";
  editFlag = false;
  editID = "";
  editElement = null;
}

function alertDisplay(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// **** Local storage ****
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id != id) return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id == id) item.value = value;
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

// **** Set up items ****

function setUpItems() {
  const items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  element.setAttributeNode(attr);
  element.setAttribute("data-id", id);
  element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
    </div>`;
  const editBtn = element.querySelector(".edit-btn");
  const deleteBtn = element.querySelector(".delete-btn");
  editBtn.addEventListener("click", editItem);
  deleteBtn.addEventListener("click", deleteItem);
  list.appendChild(element);
  container.classList.add("show-container");
}
