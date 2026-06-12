        const form = document.getElementById("registrationForm");
        const tableBody = document.getElementById("userTableBody");

        let users = JSON.parse(localStorage.getItem("users")) || [];

        displayUsers();

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullname = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const user = {
                fullname,
                email,
                password
            };

            users.push(user);

            localStorage.setItem("users", JSON.stringify(users));

            displayUsers();

            form.reset();
        });

        function displayUsers() {
            tableBody.innerHTML = "";

            users.forEach(user => {
                const row = `
                    <tr>
                        <td>${user.fullname}</td>
                        <td>${user.email}</td>
                        <td>${user.password}</td>
                    </tr>
                `;

                tableBody.innerHTML += row;
            });
        }

