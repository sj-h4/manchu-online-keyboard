<script lang="ts">
	import Key from "./Key.svelte";
</script>

<div>
	<div>Vowels</div>
	<div class="manchu-keyboard-container">
		 <Key on:clickedCharacter character="&#x1820" />
		 <Key on:clickedCharacter character="&#x185d" />
		 <Key on:clickedCharacter character="&#x1822" />
		 <Key on:clickedCharacter character="&#x1824" />
		 <Key on:clickedCharacter character="&#x1860" />
		 <Key on:clickedCharacter character="&#x1861" />
	</div>
	<div>Consonatns</div>
	<div class="manchu-keyboard-container">
		<Key on:clickedCharacter character="&#x1828" /> <!-- n -->
		<Key on:clickedCharacter character="&#x1829" /> <!-- ng -->
		<Key on:clickedCharacter character="&#x1874" /> <!-- k -->
		<Key on:clickedCharacter character="&#x1864" /> <!-- g -->
		<Key on:clickedCharacter character="&#x1865" /> <!-- h -->
	</div>
</div>

<style lang="scss">
	.manchu-keyboard-container {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(8, 1fr);
		gap: 5px;
	}
</style>
