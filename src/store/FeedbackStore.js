import { writable } from "svelte/store";
export const FeedBackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit elit, error vitae tenetur dolores facere molestiae?",
    },
    {
        id: 2,
        rating: 9,
        text: "Lorem ipsum dolor sit a Numquam, sunt eaque! Optio placeat velit, error vitae tenetur dolores facere molestiae?",
    },
    {
        id: 3,
        rating: 8,
        text: "Lorem ipsum  adipisicing eli facere molestiae?",
    },
]);
