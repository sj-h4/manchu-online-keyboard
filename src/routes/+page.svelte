<script lang="ts">
    let input = '';
</script>

<h1>Manchu Online Keyboard</h1>

<div id="manchu-text-container">
    <textarea id="input" class="manchu-item" rows="5" cols="35" placeholder="Type here..." bind:value={input}></textarea>
    <p class="manchu-text manchu-item">{input}</p>
</div>

<style lang="scss">
  textarea {
    max-width: 100%;
    max-height: 100%;
    border: none;
    padding: 1em;
    font-size: 1.5em;
    border: solid 1px #ccc;
  }

  p {
    white-space: pre-wrap;
    overflow: scroll;
    border: solid 1px #ccc;
  }

  #manchu-text-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .manchu-item {
        flex: 1;
    }
  }

  .manchu-text {
    height: 600px;
    writing-mode: vertical-lr;
    font-size: 1.5em;
  }
</style>
