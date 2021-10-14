<script>
    import { FeedBackStore } from "../store/FeedbackStore";

    import Card from "./card.svelte";
    export let item = {};

    const handleDelete = (itemId) => {
        FeedBackStore.update((currentFeedback) => currentFeedback.filter((fb) => fb.id !== itemId));
    };
</script>

<Card>
    <div class="num-display">{item.rating}</div>
    <div class="text">{item.text}</div>
    <button class="close" on:click={() => handleDelete(item.id)}>&times;</button>
</Card>

<style lang="scss">
    $color: #FF3C00;
    .num-display {
        position: absolute;
        top: 0px;
        left: -10px;
        width: 50px;
        height: 50px;
        background: $color;
        color: white;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 20px;
    }
    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 25px;
        color: salmon;
        background: none;
        border: none;
        padding: 0px;
        &:hover {
            color: red;
        }
    }
</style>
