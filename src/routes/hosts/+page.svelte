<script>

    export let data;
    
</script>



<div class="table-container text-token px-12 py-4">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>wg id</th>
                <th>Source IP</th>
                <th>Destination IP</th>
                <th>Policy</th>
                
            </tr>
        </thead>
        <tbody>
            {#each data.data as row}
                <tr>
                    
                    <td>{row.name}</td>
                    <td>{row.wg_ip}</td>
                    <td>{row.up}</td>
                    <td>{row.last_alive}</td> 
                    <td>{row.current_ip}</td> 
                </tr>
            {/each}
        </tbody>
        
    </table>
</div>