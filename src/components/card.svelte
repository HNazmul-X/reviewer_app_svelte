<div class={`card`}>
    <slot />
</div>

<style lang="scss">
    .card {
        background: #ffffff;
        box-shadow: 3px 3px 34px -3px rgba(255, 106, 61, 0.45);
        color: #ff3c00;
        padding: 30px 50px;
        border-radius: 15px;
        margin: 20px auto;
        position: relative;
        transition: 0.3s;
    }
</style>
