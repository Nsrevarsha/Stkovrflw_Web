<script>
	let items = [
		{
			userid: '1001',
			name: 'Sanjana',
			sourceIpPort: '192.168.1.100:42261',
			destIpPort: '172.16.0.23:43364',
			policy: 'Accept'
		},
		{
			userid: '1002',
			name: 'Avinash',
			sourceIpPort: '10.10.10.10:80789',
			destIpPort: '192.168.0.1:44312',
			policy: 'Deny'
		},
		{
			userid: '1003',
			name: 'Bhavana',
			sourceIpPort: '172.17.17.17:22050',
			destIpPort: '10.10.10.20:22201',
			policy: 'Accept'
		},
		{
			userid: '1004',
			name: 'Esha',
			sourceIpPort: '172.17.17.30:53878',
			destIpPort: '10.10.10.40:53771',
			policy: 'Deny'
		},
		{
			userid: '1005',
			name: 'Dinesh',
			sourceIpPort: '10.10.10.30:11034',
			destIpPort: '192.168.0.30:11092',
			policy: 'Accept'
		},
		{
			userid: '1006',
			name: 'Rahul',
			sourceIpPort: '10.10.10.40:11034',
			destIpPort: '192.168.0.30:11092',
			policy: 'Accept'
		}
        
	];
    

</script>

<div class="table-container text-token">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>User id</th>
                <th>Source IP</th>
                <th>Destination IP</th>
                <th>Policy</th>
                <th>Name</th>
                <th>Name</th>
                <th>Name</th>
                <th>Name</th>
                <th>Name</th>
                <th>name</th>
            </tr>
        </thead>
        <tbody>
            {#each items as row}
                <tr>
                    <td>{row.name}</td>
                    <td>{row.userid}</td>
                    <td>{row.sourceIpPort}</td>
                    <td>{row.destIpPort}</td>
                    <td><span class={"badge variant-filled"}>{row.policy}</span></td>
                    <td>{row.name}</td>
                    <td>{row.name}</td>
                    <td>{row.name}</td>
                    <td>{row.name}</td>
                    <td>{row.name}</td>
                    <td><span class="badge variant-soft-primary">{row.atomicNumber}</span></td>
                </tr>
            {/each}
        </tbody>
        
    </table>
</div>
