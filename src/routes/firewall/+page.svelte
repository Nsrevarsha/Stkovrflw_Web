<script>
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import RightDrawer from '../components/RightDrawer.svelte';
	const drawerStore = getDrawerStore();

	export let data;
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
				<tr>
					<td>{row.name}</td>
					<td>{row.protocol}</td>
					<td>{row.source}</td>
					<td>{row.source_port}</td>
					<td>{row.destination}</td>
					<td>{row.destination_port}</td>
					<td><span class={'variant-filled badge'}>{row.action}</span></td>
					<a href={`/firewall/${row.id}`}> edit </a>
					<button class="variant-ghost-secondary btn rounded-xl">Delete</button>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
