<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let character: string;

    const dispatch = createEventDispatcher();
    function handleClick() {
        dispatch("clickedCharacter", {
            character: character,
        })
    }
</script>

<button type="button" on:click={handleClick}>
    <span class="manchu-character">{character}</span>
</button>

<style lang="scss">
    .manchu-character {
        font-size: 1.5em;
        writing-mode: vertical-lr;
    }
</style>
