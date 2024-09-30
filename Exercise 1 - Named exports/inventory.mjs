const inventory = [];

const addItem = (...elements) => {
    elements.forEach(val => inventory.push(val));
    console.log(`inventory-->`, inventory);
}

const removeItem = (element) => {
    let itemRemoved = false;
    for (let i = 0; i < inventory.length; i++) {
        if (element === inventory[i]) {
            inventory.splice(i, 1);
            console.log(`${element} is at ${i}`);
            itemRemoved = true;
            console.log(`inventory-->`, inventory);
            i--;
        }
    }
    if (itemRemoved) {
        console.log('items removed from inventory');
    } else {
        console.log(`item doesn't exist`);
    }
}

const listItems = () => {
    inventory.forEach((num, index) => console.log(`element at ${index} - ${num}`));
    console.log(`inventory-->`, inventory);
}

export { addItem, removeItem, listItems };