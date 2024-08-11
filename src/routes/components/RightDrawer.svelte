

<div class="grid px-4 justify-center py-28">
        <form action="/firewall/?edit">
            <label for="name">Name:</label>
            <input type="text" id="name" class=" w-60 h-10 rounded-md">
            <label for="sourceip">Source IP:</label>
            <input type="text" id="sourceip" class=" w-60 h-10 rounded-md">
            <label for="destinationport">Destination IP:</label>
            <input type="text" id="destinationport" class=" w-60 h-10 rounded-md">
            <label for="policy">Policy:</label>
            <input type="text" id="policy" class=" w-60 h-10 rounded-md">
            <div class="grid justify-end my-10">
                <button class="variant-glass-secondary rounded-xl p-1" >Save changes</button>
            </div>
        </form>
</div>