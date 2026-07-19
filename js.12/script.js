const users = [
    {
        name: "Rohit",
        age: 23,
        city: "Jammu"
    },
    {
        name: "Aman",
        age: 21,
        city: "Delhi"
    },
    {
        name: "Rahul",
        age: 24,
        city: "Mumbai"
    }
];

const usersContainer = document.getElementById("users");

const displayUsers = (usersArray) => {

    // Clear previous content
    usersContainer.innerHTML = ""; 

    // Loop through each user
    usersArray.forEach((user) => {

        // Object destructuring
        const { name, age, city } = users;

        // Create a card for each user
        usersContainer.innerHTML += `
            <div class="card">
                <h2>👤 ${name}</h2>
                <p>🎂 Age: ${age}</p>
                <p>📍 City: ${city}</p>
            </div>
        `;
    });

};

// Display all users
displayUsers(users);