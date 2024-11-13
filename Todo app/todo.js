// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyAiL_UEgrDN6YrdaxvmZIhQf2ZU8pWidqE",
//     authDomain: "todo-app-a0876.firebaseapp.com",
//     projectId: "todo-app-a0876",
//     databaseURL: "https://todo-app-a0876-default-rtdb.firebaseio.com",
//     storageBucket: "todo-app-a0876.appspot.com",
//     messagingSenderId: "875477936471",
//     appId: "1:875477936471:web:ee21570a99ae189e427612",
//     measurementId: "G-M4CJJW9ZG6"
// };

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// const auth = firebase.auth();
// const database = firebase.database();

// const authContainer = document.getElementById("authContainer");
// const todoContainer = document.getElementById("todoContainer");
// const urlElement = document.getElementById("list");

// auth.onAuthStateChanged((user) => {
//     if (user) {
//         authContainer.style.display = "none";
//         todoContainer.style.display = "block";
//         loadTasks(user.uid);
//     } else {
//         authContainer.style.display = "block";
//         todoContainer.style.display = "none";
//     }
// });

// function signUp() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     auth.createUserWithEmailAndPassword(email, password)
//         .then(() => {
//             alert("Account created successfully!");
//         })
//         .catch((error) => {
//             alert("Error: " + error.message);
//         });
// }

// function logIn() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     auth.signInWithEmailAndPassword(email, password)
//         .then(() => {
//             alert("Logged in successfully!");
//         })
//         .catch((error) => {
//             alert("Error: " + error.message);
//         });
// }

// function logOut() {
//     auth.signOut().then(() => {
//         alert("Logged out successfully!");
//     });
// }

var urlElement = document.getElementById("list");

function addTodo() {
    var input = document.getElementById("input");
    if (input.value.trim() === "") return;

    var liElement = document.createElement("li");
    liElement.className = "todo-item";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.onclick = function() { toggleComplete(taskText, checkbox); };
    liElement.appendChild(checkbox);

    var taskText = document.createElement("span");
    taskText.className = "todo-text";
    taskText.innerText = input.value;
    liElement.appendChild(taskText);

    var buttonsDiv = document.createElement("div");
    buttonsDiv.className = "todo-buttons";

    var dltbtn = document.createElement("button");
    dltbtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    dltbtn.onclick = function() { deleteItem(liElement); };
    buttonsDiv.appendChild(dltbtn);

    var editbtn = document.createElement("button");
    editbtn.innerHTML = '<i class="fas fa-edit"></i>';
    editbtn.onclick = function() { editItem(taskText); };
    buttonsDiv.appendChild(editbtn);

    liElement.appendChild(buttonsDiv);

    urlElement.appendChild(liElement);

    input.value = "";
}

function deleteAll() {
    urlElement.innerHTML = "";
}

function deleteItem(taskElement) {
    taskElement.remove();
}

function editItem(taskTextElement) {
    var newInput = prompt("Enter the value to be updated", taskTextElement.innerText);
    if (newInput && newInput.trim() !== "") {
        taskTextElement.innerText = newInput;
    }
}

function toggleComplete(taskText, checkbox) {
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray";
    } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "black";
    }
}