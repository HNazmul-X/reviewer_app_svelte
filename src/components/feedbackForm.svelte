<script>
    import { FeedBackStore } from "./../store/FeedbackStore.js";
    import { v4 as uuid } from "uuid";
    import RatingButton from "./ratingButton.svelte";
    import Button from "./button.svelte";
    import Card from "./card.svelte";

    let [text, btnDisabled, min, massage, rating] = ["", true, 10, null, 10];

    const handleInput = () => {
        const condition = text.trim().length <= min;
        massage = condition ? `Text Must be Atleast ${min} character` : null;
        btnDisabled = condition ? true : false;
    };

    const handleSeletecRating = (e) => (rating = e.detail);

    const handleFormSubmit = () => {
        if (text.trim().length > min) {
            const newFormData = { id: uuid(), text, rating: +rating };
            FeedBackStore.update((currentFeedback) => [newFormData, ...currentFeedback]);
            text = "";
        }
    };
</script>

<Card>
    <header>
        <h3>How Would you rate your services with us?</h3>
    </header>
    <RatingButton on:rating-seleted={handleSeletecRating} />
    <form on:submit|preventDefault={handleFormSubmit} class="">
        <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell Us something That Keeps You coming Back" />
        <Button disabled={btnDisabled} type="submit">Send</Button>
    </form>
    {#if massage}
        <div class="massage">
            {massage}
        </div>
    {/if}
</Card>

<style lang="scss">
    header {
        text-align: center;
        margin-bottom: 10px;
    }
    form {
        border: 1px solid rgba(0, 0, 0, 0.267);
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        * {
            margin-bottom: 0px;
        }
        input {
            border: none;
            flex-shrink: 1;
            width: 90%;
            &:focus {
                outline: none;
            }
        }
    }
    .massage {
        text-align: center;
    }
</style>
