<script lang="ts">
	import '../../app.css';
	import Calendar from 'js-year-calendar';
	import 'js-year-calendar/dist/js-year-calendar.css';

	import type CalendarDataSourceElement from 'js-year-calendar/dist/interfaces/CalendarDataSourceElement';
	import { onMount } from 'svelte';

	export let dataSource: CalendarDataSourceElement[];

	onMount(() => {
		const calendar = new Calendar('.calendar');
		calendar.setDataSource(dataSource);
	});
</script>

<div class="calendar">Calendar</div>
