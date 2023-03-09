<script lang="ts">
	import CalendarInstance from '../lib/components/CalendarInstance.svelte';
	import Calendar from 'js-year-calendar';
	import 'js-year-calendar/dist/js-year-calendar.css';
	import type CalendarOptions from 'js-year-calendar/dist/interfaces/CalendarOptions';

	let dataSource = [
		{
			id: 0,
			name: 'Google I/O',
			location: 'San Francisco, CA',
			startDate: new Date(2023, 0, 23),
			endDate: new Date(2023, 0, 26)
		},
		{
			id: 1,
			name: 'Microsoft Convergence',
			location: 'New Orleans, LA',
			startDate: new Date(2023, 3, 16),
			endDate: new Date(2023, 3, 19)
		}
	];
</script>

<!-- <button on:click={addEvent}>Click me</button> -->
<CalendarInstance {dataSource} />
