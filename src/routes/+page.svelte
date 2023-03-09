<script lang="ts">
	import '../app.css';
	import CalendarInstance from '../lib/components/CalendarInstance.svelte';

	import 'js-year-calendar/dist/js-year-calendar.css';

	import Modal from '../lib/components/Modal.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- <button on:click={addEvent}>Click me</button> -->
<Modal />
<CalendarInstance dataSource={data.data} />
