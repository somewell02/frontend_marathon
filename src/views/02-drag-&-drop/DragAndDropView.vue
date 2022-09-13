<template>
    <div class="drag_and_drop_wrap">
        <div class="wrap">
            <div class="row">
                <div class="col-header start">Начать</div>
                <div class="col-header progress">В процессе</div>
                <div class="col-header done">Готовы</div>
            </div>

            <div class="row placeholders">
                <div class="placeholder">
                    <div class="item" draggable="true">Перетащи меня 1</div>
                    <div class="item" draggable="true">Перетащи меня 2</div>
                    <div class="item" draggable="true">Перетащи меня 3</div>
                </div>
                <div class="placeholder">
                    <div class="item" draggable="true">Перетащи меня 4</div>
                    <div class="item" draggable="true">Перетащи меня 5</div>
                </div>
                <div class="placeholder"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DragAndDropView",
    mounted() {
        const items = document.querySelectorAll(".item");
        const placeholders = document.querySelectorAll(".placeholder");

        const dragover = event => {
            event.preventDefault();
        }

        const dragenter = event => {
            if (!event.target.classList.contains("item")) {
                event.target.classList.add("hovered");
            }
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
            if (event.target.classList.contains("item")) {
                event.target.parentNode.append(item);
            } else {
                event.target.append(item);
            }
            event.target.classList.remove("hovered");
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
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.drag_and_drop_wrap {
    font-family: 'Roboto', sans-serif;
    background-color: #e5e5e5;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin: 0;

    .wrap {
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .row {
        display: flex;
        width: 600px;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .col-header {
        width: 150px;
        box-shadow: 4px 4px 9px rgba(198, 198, 198, 0.36);
        border-radius: 20px;
        padding: 0.8rem 1rem;
        color: #fff;
    }

    .item {
        width: 150px;
        height: 66px;
        border: 1px solid #eee;
        box-shadow: 4px 4px 9px rgba(198, 198, 198, 0.36);
        border-radius: 20px;
        background: #f7f6f7;
        padding: 0.8rem 1rem;
        color: #828282;
        text-align: center;
        cursor: grab;
        margin-bottom: 15px;
    }

    .item:active {
        cursor: grabbing;
    }

    .placeholders {
        flex-grow: 3;
    }

    .placeholder {
        width: 150px;
        height: 100%;
        border-radius: 20px;
        transition: 0.3s;
    }

    .start {
        background: linear-gradient(90deg, #ff85e4 0%, #229efd 179.25%);
    }

    .progress {
        background: linear-gradient(90deg, #209cff 0%, #68e0cf 100%);
    }

    .done {
        background: linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%);
    }

    .hold {
        box-shadow: none;
    }

    .hide {
        display: none;
    }

    .hovered {
        background-color: #d7d7d7;
    }
}
</style>