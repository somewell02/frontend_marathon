import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {
        path: "/cards",
        name: "cards",
        component: () => import("@/views/01-cards/CardsView")
    },
    {
        path: "/drag-and-drop",
        name: "drag-and-drop",
        component: () => import("@/views/02-drag-&-drop/DragAndDropView")
    },
    {
        path: "/sliders",
        name: "sliders",
        component: () => import("@/views/03-sliders/SlidersView")
    },
    {
        path: "/board",
        name: "board",
        component: () => import("@/views/04-board/BoardView")
    },
    {
        path: "/aim-game",
        name: "aim-game",
        component: () => import("@/views/05-aim-game/AimGameView")
    },
    {
        path: "/",
        name: "swipe-gallery",
        component: () => import("@/views/06-swipe-gallery/SwipeGalleryView")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;