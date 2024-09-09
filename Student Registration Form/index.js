function save() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    var tablebody = document.getElementById("tablebody");

    var newrow = document.createElement("tr");

    newrow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button onclick="deleterow(this)">Delete</button></td>
    `;
    tablebody.appendChild(newrow);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";
}

function deleterow(button) {
    button.parentElement.parentElement.remove();
}
