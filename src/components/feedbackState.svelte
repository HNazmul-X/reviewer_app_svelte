<script>
	import { FeedBackStore } from './../store/FeedbackStore.js';
    $: feedbackCount = $FeedBackStore.length;
    $: avarage = ($FeedBackStore.reduce((accumalator, { rating }) => accumalator + rating, 0) / $FeedBackStore.length).toFixed(1);
</script>

<div class="feeback-states">
    <h4>{feedbackCount}: Reivews</h4>
    <h4>Rating Avarage : {avarage===NaN?0:avarage}</h4>
</div>

<style lang="scss">
    .feeback-states{
        background:rgba(0, 0, 0, 0.226);
        display: flex;
        justify-content: space-between;
        padding:20px;
        border-radius: 10px;
        h4{
            font-size: 20px;
            font-weight: 400;
        }
    }
</style>