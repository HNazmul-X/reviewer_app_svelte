<script>
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()
    let selected = 10
    let handleOnChange = (e) =>{
        selected = e.target.value
        console.log(selected)
        dispatch("rating-seleted",selected)
    }
</script>

<ul>
    <li>
        <input type="radio" name="rating" id="num1" value="1" on:change={handleOnChange} checked={selected===1}>
        <label for="num1">1</label>
    </li>
    <li>
        <input type="radio" name="rating" id="num2" value="2" on:change={handleOnChange} checked={selected===2}>
        <label for="num2">2</label>
    </li>
    <li>
        <input type="radio" name="rating" id="num3" value="3" on:change={handleOnChange} checked={selected===3}>
        <label for="num3">3</label>
    </li>
    <li>
        <input type="radio" name="rating" id="num4" value="4" on:change={handleOnChange} checked={selected===4}>
        <label for="num4">4</label>
    </li>
    <li>
        <input type="radio" name="rating" id="num5" value="5" on:change={handleOnChange} checked={selected===5}>
        <label for="num5">5</label>
    </li>
    <li>
        <input type="radio" name="rating" id="num6" value="6" on:change={handleOnChange} checked={selected===6}>
        <label for="num6">6</label>
    </li>
    <li>
        <input type="radio" name="rating" id="num7" value="7" on:change={handleOnChange} checked={selected===7}>
        <label for="num7">7</label>
    </li>
    <li>
        <input type="radio" name="rating" id="num8" value="8" on:change={handleOnChange} checked={selected===8}>
        <label for="num8">8</label>
    </li>
    <li>
        <input type="radio" name="rating" id="num9" value="9" on:change={handleOnChange} checked={selected===9}>
        <label for="num9">9</label>
    </li>
    <li>
        <input type="radio" name="rating" id="num10" value="10" on:change={handleOnChange} checked={selected===10}>
        <label for="num10">10</label>
    </li>
</ul>

<style lang="scss">
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5px;
        margin: 7px auto;
        li{
            user-select: none;
            label{
                width:40px;
                height:40px;
                background:rgb(243, 225, 219);
                text-align: center;
                padding:5px;
                border-radius: 50%;
                font-size: 20px;
                color:#FF3C00;
                &:hover{
                    transform: scale(1.05);
                    opacity: 0.98;
                    cursor: pointer;
                }
            }
            input[type="radio"]{
                display: none;
                &:checked ~ label{
                    background:#FF3C00;
                    color:white;
                }
            }
        }
    }
</style>