<script>
    import FeedbackItem from "./feedbackItem.svelte";
    export let feedback = [];
    
</script>

{#each feedback as fb(fb.id)}
    <FeedbackItem on:delete-feedback item={fb} />
{/each}
