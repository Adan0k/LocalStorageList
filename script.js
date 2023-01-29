let list = document.getElementById("list");
let container = [];
const addItem = (value) => {
    const item = document.createElement("li");
    const del = document.createElement("button");
    const text = document.createElement("span");
    text.innerHTML = value;
    text.addEventListener("click", () => {
        let edited = prompt();
        if (edited == "") {
            return;
        }
        text.innerHTML = edited;
    })
    item.appendChild(text);

    del.innerHTML = "delete";
    del.addEventListener("click", () => {
        list.removeChild(item);
        container.splice(container.indexOf(item.value), 1);
        localStorage.setItem("container", container);
    });
    item.appendChild(del);
    list.appendChild(item);
}

if (localStorage.length != 0) {
    container = localStorage.getItem("container").split(",");
    for (let i = 0; i < container.length; i++) {
        if (container[i] != "") {
            addItem(container[i]);
        }
    }
}
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
});

document.getElementById("add").addEventListener("click", () => {
    const value = document.getElementById("value").value;
    if (value == "") {
        return
    }
    addItem(value);
    container.push(value);
    localStorage.setItem("container", container);
});
document.getElementById("delete").addEventListener("click", () => {
    list.remove();
    container = []
    localStorage.setItem("container", container);
    list = document.createElement("ul");
    list.id = "list";
    document.body.appendChild(list);
});

