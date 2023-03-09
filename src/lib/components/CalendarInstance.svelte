<script lang="ts">
	import '../../app.css';
	import Calendar from 'js-year-calendar';
	import 'js-year-calendar/dist/js-year-calendar.css';

	import type CalendarDataSourceElement from 'js-year-calendar/dist/interfaces/CalendarDataSourceElement';
	import { onMount } from 'svelte';

	export let dataSource: CalendarDataSourceElement[];

	// function displayCalendar(element: HTMLDivElement) {
	// 	let myCalendar = new Calendar(element);
	// 	myCalendar.setDataSource(dataSource);
	let handleClick;

	onMount(() => {
		const calendar = new Calendar('.calendar');
		calendar.setDataSource(dataSource);

		handleClick = () => {
			calendar.addEvent({
				name: 'Javascript lecture',
				color: 'red',
				startDate: new Date(2023, 1, 16),
				endDate: new Date(2023, 1, 29)
			});
			console.log(calendar.getStartDate());
		};

		myCal.addEventListener('clickDay', function (e) {
			alert('Click on day ' + e.date.toString());
		});
	});

	let myCal;
</script>

<button on:click={handleClick}>Click me</button>

<div class="calendar" bind:this={myCal}>Calendar</div>
