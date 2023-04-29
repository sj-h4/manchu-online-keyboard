<script lang="ts">
	import Key from "./Key.svelte";
</script>

<div>
	<div>Vowels</div>
	<div class="manchu-keyboard-container">
		 <Key on:clickedCharacter character="&#x1820" /> <!-- a -->
		 <Key on:clickedCharacter character="&#x185d" /> <!-- e -->
		 <Key on:clickedCharacter character="&#x1822" /> <!-- i -->
		 <Key on:clickedCharacter character="&#x1824" /> <!-- o -->
		 <Key on:clickedCharacter character="&#x1860" /> <!-- u -->
		 <Key on:clickedCharacter character="&#x1861" /> <!-- v -->
	</div>
	<div>Consonatns</div>
	<div class="manchu-keyboard-container">
		<Key on:clickedCharacter character="&#x1828" /> <!-- n -->
		<Key on:clickedCharacter character="&#x1829" /> <!-- ng -->
		<Key on:clickedCharacter character="&#x182a" /> <!-- b -->
		<Key on:clickedCharacter character="&#x182b" /> <!-- p -->
		<Key on:clickedCharacter character="&#x182c" /> <!-- q -->
		<Key on:clickedCharacter character="&#x182d" /> <!-- G -->
		<Key on:clickedCharacter character="&#x182e" /> <!-- m -->
		<Key on:clickedCharacter character="&#x182f" /> <!-- l -->
		<Key on:clickedCharacter character="&#x1830" /> <!-- s -->
		<Key on:clickedCharacter character="&#x1867" /> <!-- x -->
		<Key on:clickedCharacter character="&#x1832" /> <!-- t -->
		<Key on:clickedCharacter character="&#x1869" /> <!-- d -->
		<Key on:clickedCharacter character="&#x1834" /> <!-- c -->
		<Key on:clickedCharacter character="&#x1835" /> <!-- j -->
		<Key on:clickedCharacter character="&#x1836" /> <!-- y -->
		<Key on:clickedCharacter character="&#x1837" /> <!-- r -->
		<Key on:clickedCharacter character="&#x1838" /> <!-- w -->
		<Key on:clickedCharacter character="&#x1839" /> <!-- f -->
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
