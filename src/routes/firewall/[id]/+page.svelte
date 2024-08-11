<script>
    export let data;
</script>

<form method="post" action="?edit">
  <input value={data.dat.name} type="text" name="name"/>
  <input value={data.dat.source} type="text" name="source"/>
  <input value={data.dat.source_port} type="text" name="source_port"/>
  <input value={data.dat.destination} type="text" name="destination"/>
  <input value={data.dat.destination_port} type="text" name="destination_port"/>
  <input value={data.dat.action} type="text" name="action"/>
  <input value={data.dat.protocol} type="text" name="protocol"/>
</form>
