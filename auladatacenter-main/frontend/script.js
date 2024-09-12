document.getElementById("user-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch("http://localhost:8080/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {
        loadUsers();
    }
});

async function loadUsers() {
    const response = await fetch("http://localhost:8080/users/");
    const users = await response.json();
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
    });
}

loadUsers();
