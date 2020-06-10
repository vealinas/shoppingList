// var button = document.getElementsByTagName('button')[0];
// button.addEventListener("click", function() {
// 	console.log("CLICK!!!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var btn = document.querySelectorAll("button");

// additional
function delBtn_listen() {
     for (i = 1; i < btn.length; i++) {
          btn[i].addEventListener("click", delParent);
     }
}

var item_listen = function () {
     for (i = 0; i < li.length; i++) {
          li[i].addEventListener("click", strikethru);
     }
};

function strikethru(event) {
     event.target.classList.toggle("done");
}
// additional

function inputLength() {
     return input.value.length;
}

function createListElement() {
     // additional
     var delBtn = document.createElement("button");
     delBtn.innerHTML = "Delete";
     delBtn.addEventListener("click", delParent);
     // additional

     var li = document.createElement("li");
     li.appendChild(document.createTextNode(input.value));

     // additional
     li.appendChild(delBtn);
     li.addEventListener("click", strikethru);
     // additional

     ul.appendChild(li);

     input.value = "";
}

function addListAfterClick() {
     if (inputLength() > 0) {
          createListElement();
     }
}

function addListAfterKeypress(event) {
     if (inputLength() > 0 && event.keyCode === 13) {
          createListElement();
     }
}

// additional
function delParent(event) {
     event.target.parentElement.remove("li");
}
// additional

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// additional
delBtn_listen();
item_listen();
// additional
