<script>
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import RightDrawer from '../components/RightDrawer.svelte';
	const drawerStore = getDrawerStore();

	export let data;

	const rightOpen = () => {
		const drawerSettings = {
			// Property Overrides
			position: 'right',

			width: 'w-[280px] md:w-[480px] wl-24 ',
			padding: 'p-4',
			rounded: 'rounded-xl',
			meta: { content: RightDrawer }
		};
		drawerStore.open(drawerSettings);
	};
</script>

<div class="text-token table-container">
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Name</th>
				<th>Protocol</th>
				<th>Source</th>
				<th>Source Port</th>
				<th>Destination</th>
				<th>Destination Port</th>
				<th>Action</th>
				<th></th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each data.data as row}
				<form action="/firewall?edit" class="hidden">
					<input type="text" name="id" value={row.id} />
					<input type="text" name="name" value={row.name} />
					<input type="text" name="protocol" value={row.protocol} />
					<input type="text" name="source" value={row.source} />
					<input type="text" name="source" value={row.source_port} />
					<input type="text" name="destination" value={row.destination} />
					<input type="text" name="destination" value={row.destination_port} />
				</form>
				<tr>
					<td>{row.name}</td>
					<td>{row.protocol}</td>
					<td>{row.source}</td>
					<td>{row.source_port}</td>
					<td>{row.destination}</td>
					<td>{row.destination_port}</td>
					<td><span class={'variant-filled badge'}>{row.action}</span></td>
					<button class="variant-ghost-primary btn mr-2 w-20 rounded-xl p-3" on:click={rightOpen}
						>Edit</button
					>
					<button class="variant-ghost-secondary btn rounded-xl">Delete</button>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
