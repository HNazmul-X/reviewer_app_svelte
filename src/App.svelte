<script>
    import FeedbackState from "./components/feedbackState.svelte";
    import FeedbackList from "./components/feedbackList.svelte";
    import FeedbackForm from "./components/feedbackForm.svelte";
    let logo = "images/svelte_logo.png"
</script>

<main class="container">
    <FeedbackForm />
    <FeedbackState />
    <FeedbackList />
</main>
<img src={logo} alt="logo mark" class="logo-mark">
<style>
</style>
