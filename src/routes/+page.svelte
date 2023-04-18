<script lang="ts">
	import ManchuKeyboard from './ManchuKeyboard.svelte';

  let text: string;
  
  function handleCharacter(event: CustomEvent) {
    text += event.detail.character;
  }
</script>

<h1>Manchu Online Keyboard</h1>

<div class="manchu-text-container">
  <div class="manchu-text manchu-item" contenteditable="true" bind:innerText={text}></div>
	<div>
		<ManchuKeyboard on:clickedCharacter={handleCharacter} />
	</div>
</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mongolian&display=swap');
	h1 {
		text-align: center;
	}

  [contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}

	.manchu-text-container {
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
    font-family: 'Noto Sans Mongolian', sans-serif;
		font-size: 1.5em;
	}
</style>
