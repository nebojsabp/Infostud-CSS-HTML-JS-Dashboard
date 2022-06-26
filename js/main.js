const addUser = document.querySelector(".add-user-btn");
const newUser = document.querySelector(".new-user");
const cancelUser = document.querySelector(".new-cancel-btn");
const editUser = document.querySelector(".edit-user-btn");
const editUserView = document.querySelector(".edit-user");
const cancelEdit = document.querySelector(".edit-cancel-btn");
    addUser.addEventListener("click", showNewUser);
    cancelUser.addEventListener("click", showNewUser);
    editUser.addEventListener("click", editNewUser);
    cancelEdit.addEventListener("click", editNewUser);

        function showNewUser() {
            newUser.classList.toggle("active");
        };
        function editNewUser() {
            editUserView.classList.toggle("active");
        };