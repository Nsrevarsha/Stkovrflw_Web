<script>
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    export let data;
</script>


<div>
    <h2 class="h2 m-10 text-left">{data.vserve.name}</h2>
    <div class="mx-auto center px-12">
    {#each data.vserve.expand.locations as location}
        <Accordion>
            <AccordionItem>
                <svelte:fragment slot="summary"><h5 class="h5">{location.path}</h5></svelte:fragment>
                <svelte:fragment slot="content">
                    <ul class="list">
                        <li><span class="flex-auto">{location.proxy_pass}</span></li>
                        <li><span class="flex-auto">{location.deny}</span></li>
                        <li><span class="flex-auto">{location.allow}</span></li>
                    </ul>
                </svelte:fragment>
            </AccordionItem>
        </Accordion>
    {/each}
    </div>
</div>