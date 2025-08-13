// Array to hold food items
let foodList = [];

// Function to render the food list table
function renderFoodList() {
    const tableBody = document.querySelector('#foodTable tbody');
    tableBody.innerHTML = '';

    foodList.forEach((food, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${food.name}</td>
            <td>${food.category}</td>
            <td>
                <button onclick="editFood(${index})">Edit</button>
                <button class="delete" onclick="deleteFood(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to add a new food item
function addFood() {
    const name = document.getElementById('foodName').value;
    const category = document.getElementById('foodCategory').value;

    if (name && category) {
        const newFood = { name, category };
        foodList.push(newFood);
        renderFoodList();
        document.getElementById('foodName').value = '';
        document.getElementById('foodCategory').value = '';
    } else {
        alert('Please enter both name and category');
    }
}

// Function to edit a food item
function editFood(index) {
    const newName = prompt('Enter new food name:', foodList[index].name);
    const newCategory = prompt('Enter new food category:', foodList[index].category);

    if (newName && newCategory) {
        foodList[index] = { name: newName, category: newCategory };
        renderFoodList();
    }
}

// Function to delete a food item
function deleteFood(index) {
    if (confirm('Are you sure you want to delete this item?')) {
        foodList.splice(index, 1);
        renderFoodList();
    }
}

// Initial render
renderFoodList();
