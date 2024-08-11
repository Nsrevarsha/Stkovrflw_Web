<script>
	export let data;
    const row = data.data;
</script>

<form>
	<input type="text" name="id" value={row.id} />
	<input type="text" name="name" value={row.name} />
	<input type="text" name="protocol" value={row.protocol} />
	<input type="text" name="source" value={row.source} />
	<input type="text" name="source" value={row.source_port} />
	<input type="text" name="destination" value={row.destination} />
	<input type="text" name="destination" value={row.destination_port} />
</form>
