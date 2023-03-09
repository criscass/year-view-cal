import type { PageServerLoad } from './$types';

export const load = (async () => {
	const dataSource = [
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
	return { data: dataSource };
}) satisfies PageServerLoad;
