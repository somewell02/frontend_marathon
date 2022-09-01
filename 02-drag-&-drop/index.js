const items = document.querySelectorAll(".item");
const placeholders = document.querySelectorAll(".placeholder");

const dragover = event => {
    event.preventDefault();
}

const dragenter = event => {
    event.target.classList.add("hovered");
}

const dragleave = event => {
    event.target.classList.remove("hovered");
}

placeholders.forEach(placeholder => {
    placeholder.addEventListener("dragover", dragover);
    placeholder.addEventListener("dragenter", dragenter);
    placeholder.addEventListener("dragleave", dragleave);
})

const dragdrop = (event, item) => {
    event.target.append(item);
    event.target.classList.remove("hovered");
    console.log("drop");
}

let useDragDrop;

const dragstart = (event, item) => {
    event.target.classList.add("hold");
    setTimeout(() => event.target.classList.add("hide"), 0);

    useDragDrop = e => dragdrop(e, item);
    placeholders.forEach(placeholder => {
        placeholder.addEventListener("drop", useDragDrop);
    })
}

const dragend = (event, item) => {
    event.target.classList.remove("hold", "hide");

    placeholders.forEach(placeholder => {
        placeholder.removeEventListener("drop", useDragDrop);
    })
}

items.forEach(item => {
    item.addEventListener("dragstart", e => dragstart(e, item));
    item.addEventListener("dragend", e => dragend(e, item));
})