const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const imageInput = document.getElementById("image");
const users = document.getElementById("users");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const imageValue = imageInput.value;

    console.log(nameValue);
    console.log(emailValue);
    console.log(imageValue);


    // If ANY field is empty, stop.
    if (
    nameValue.trim() === "" ||
    emailValue.trim() === "" ||
    imageValue.trim() === ""
    ) {
        alert("Please fill all fields");
    return;
    }


    userData.push({
        id: Date.now(),
        name: nameValue,
        email: emailValue,
        image: imageValue
    });     


    // this will contain the new valuse and remove the duplicates
    users.innerHTML = "";

    // Render all users again. yaha per for each wlwl code tha that replace with ui function that i call below
    ui();

    form.reset(); // this will reset the form and we will add new user info.
}); // this all foreach inside the event action.


const userData = [];


function ui() {

    users.innerHTML = "";

    userData.forEach((elem) => {
        users.innerHTML += `
        <div class="card">
            <img src="${elem.image}" alt="User Image">

            <h3>${elem.name}</h3>

            <p>${elem.email}</p>

            <button onclick="deleteUser(${elem.id})">
                Delete
            </button>

        </div>
        `});
    };

function deleteUser(id) {

    const index = userData.findIndex((elem) => elem.id === id);

    userData.splice(index, 1);

    ui();

};