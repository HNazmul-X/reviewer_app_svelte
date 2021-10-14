<script>
    export let style = "primary"
    export let type = "button"
    export let disabled = false
</script>
<button {type} {disabled} class={style}>
    <slot></slot>
</button>

<style lang="scss">
    button{
        color:#fff;
        border:0;
        border-radius: 10px;
        width: 100px;
        height:40px;
        cursor: pointer;
        margin-bottom: 0px;
        &:hover{
            transform: scale(0.98);
            opacity: 0.9;
        }
        &:disabled{
            background-color: #cccccc;
            color:#333;
            cursor: auto;
        }
        &:disabled:hover{
            transform: scale(1);
            opacity: 1;
        }
    }
    .primary{
        background-color: #FF3C00;
    }
    .secondary{
        background:#ff6a95
    }
    
</style>
