<script>
	import { FeedBackStore } from './../store/FeedbackStore.js';
    import FeedbackItem from "./feedbackItem.svelte";
    import {fade,scale} from "svelte/transition"
    
</script>

{#each $FeedBackStore as fb(fb.id)}
    <div in:scale="{{duration:500}}" out:fade>
        <FeedbackItem on:delete-feedback item={fb} />
    </div>
{/each}
