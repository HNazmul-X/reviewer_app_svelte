<div class="card">
    <slot></slot>
</div>

<style lang="scss">
    .card{
        background-color: white;
        color:purple;
        padding:30px 50px;
        border-radius: 15px;;
        margin: 20px auto;
        position: relative;
        transition: 0.3s;
        &:hover{
            background:lightgray;
        }
    }
</style>