<script>
    export let data;
</script>

<div>
    <div class="table-container text-token"> 
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>listen address</th>
                    <th>listen port</th>
                    <th>name</th>
                    <th>locations</th>
                 
                    
                </tr>
            </thead>
            <tbody>
                {#each data.data as row}
                    <tr>
                        <td>{row.listen_address}</td>
                        <td>{row.listen_port}</td>
                        <a href="/virtualServers/{[row.id]}"><td>{row.name}</td></a>
                        <td>{row.locations}</td>
                    </tr>
                {/each}
            </tbody>
            
        </table>
    </div>
</div>