"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let inventory = [];
const addItem = (name, quantity, purchaseAmount) => {
    const existingItem = inventory.find((item) => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.purchaseAmount = purchaseAmount;
    }
    else {
        inventory.push({ name, quantity, purchaseAmount });
    }
    displayInventory();
};
const removeItem = (name, quantity) => {
    const existingItem = inventory.find((item) => item.name === name);
    if (existingItem) {
        if (existingItem.quantity >= quantity) {
            existingItem.quantity -= quantity;
            if (existingItem.quantity === 0) {
                inventory = inventory.filter((item) => item.name !== name);
            }
        }
        else {
            console.error(`Not enough ${name} in stock`);
        }
    }
    else {
        console.error(`${name} not found in inventory`);
    }
    displayInventory();
};
const displayInventory = () => {
    const tableBody = document.getElementById('table_body');
    //const tableBody: HTMLElement | null
    tableBody === null || tableBody === void 0 ? void 0 : tableBody.innerHTML = '';
    inventory.forEach((item) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        const quantityCell = document.createElement('td');
    });
};
