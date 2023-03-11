<script lang="ts">
	import '../app.css';
	import CalendarInstance from '../lib/components/CalendarInstance.svelte';

	import 'js-year-calendar/dist/js-year-calendar.css';

	import Modal from '../lib/components/Modal.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	let modalOpen = false;

	function handleModalToggle() {
		modalOpen = !modalOpen;
	}
</script>

<!-- <button on:click={addEvent}>Click me</button> -->
<button
	class="bg-green-500 text-white rounded-md px-6 py-2 my-6 text-base font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
	id="open-btn"
	on:click={handleModalToggle}
>
	Add a booking
</button>
{#if modalOpen}
	<Modal on:close={handleModalToggle} />
{/if}
<CalendarInstance dataSource={data.data} />
