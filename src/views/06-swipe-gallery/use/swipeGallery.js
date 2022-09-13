import {computed, onBeforeUnmount, onMounted, reactive, ref} from "vue";

export const useSwipeGallery = (init = {}) => {
    const gallerySize = ref(init.items.length);
    const gridSize = computed(() => Math.ceil(Math.sqrt(gallerySize.value)));

    const pos = reactive({X: 0, Y: 0})
    const activeIndex = computed(() => pos.Y * gridSize.value + pos.X + 1)

    let swipeStartX = 0;
    let swipeStartY = 0;
    let swipeEndX = 0;
    let swipeEndY = 0;

    const swipeStart = pos => {
        swipeStartX = pos.screenX;
        swipeStartY = pos.screenY;
    }

    const swipeEnd = pos => {
        swipeEndX = pos.screenX;
        swipeEndY = pos.screenY;
        handleSwipe();
    }

    const touchStart = e => swipeStart(e.changedTouches[0]);
    const touchEnd = e => swipeEnd(e.changedTouches[0])

    const handleSwipe = () => {
        if (swipeEndY !== swipeStartY) {
            if (Math.abs(Math.abs(swipeEndX - swipeStartX) - Math.abs(swipeEndY - swipeStartY)) < 80) {
                if (swipeEndX > swipeStartX) {
                    if (swipeEndY > swipeStartY && pos.X > 0 && pos.Y > 0) {
                        pos.X--
                        pos.Y--
                    } else if (swipeEndY < swipeStartY && pos.X > 0 && ((pos.Y + 1) * gridSize.value + pos.X - 1) < gallerySize.value) {
                        pos.X--
                        pos.Y++
                    }
                } else if (swipeEndX < swipeStartX) {
                    if (swipeEndY > swipeStartY && pos.Y > 0 && pos.X + 1 < gridSize.value) {
                        pos.X++
                        pos.Y--
                    } else if (
                        swipeEndY < swipeStartY
                        && ((pos.Y + 1) * gridSize.value + pos.X + 1) < gallerySize.value
                    ) {
                        pos.X++
                        pos.Y++
                    }
                }
            } else if (Math.abs(swipeEndX - swipeStartX) >= Math.abs(swipeEndY - swipeStartY)) {
                if (swipeEndX > swipeStartX && pos.X > 0)
                    pos.X--
                else if (swipeEndX < swipeStartX && pos.X + 1 < gridSize.value && activeIndex.value < gallerySize.value)
                    pos.X++
            } else {
                if (swipeEndY > swipeStartY && pos.Y > 0)
                    pos.Y--
                else if (swipeEndY < swipeStartY && ((pos.Y + 1) * gridSize.value + pos.X) < gallerySize.value)
                    pos.Y++
            }
        }
    }

    onMounted(() => {
        document.addEventListener('mousedown', swipeStart);
        document.addEventListener('mouseup', swipeEnd);
        document.addEventListener('touchstart', touchStart);
        document.addEventListener('touchend', touchEnd);
    })

    onBeforeUnmount(() => {
        document.removeEventListener('mousedown', swipeStart);
        document.removeEventListener('mouseup', swipeEnd);
        document.removeEventListener('touchstart', touchStart);
        document.removeEventListener('touchend', touchEnd);
    })

    return {
        gridSize,
        pos,
        activeIndex,
    }
}