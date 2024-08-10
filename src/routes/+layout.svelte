<script>
	// import { initializeStore } from '@skeletonlabs/skeleton';
	import { AppBar, Drawer, initializeStores } from '@skeletonlabs/skeleton';
	import '@fortawesome/fontawesome-free/css/all.min.css'
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	// import Drawer from './Drawer.svelte';

	import '../app.css';
	// initializeStore();
	initializeStores();
	const drawerStore = getDrawerStore();
	let valueSingle = 'books';
	const triggerOpen = () => {
		const drawerSettings = {
			// Property Overrides
			position: 'left',

			width: 'w-[280px] md:w-[480px] wl-24 ',
			padding: 'p-4',
			rounded: 'rounded-xl'
		};
		drawerStore.open(drawerSettings);
	};
	const triggerClose = () => {
		drawerStore.close();
	};
</script>

<div>
	<AppBar class="w-full">
		<a href="/">
			<h2 class="h2 btn-icon cursor-pointer justify-normal p-2" data-toc-ignore>Stack Overflowers</h2>
		</a>
	</AppBar>
	
	
	<div
		class="card bg-surface-50-900-token float-left grid h-screen w-full grid-cols-[auto_1fr] rounded-none"
	>
	
		<AppRail class="grid-flow-col">
			<AppRailAnchor>
				<button class="btn col-span-2" on:click={() => triggerOpen()}>
					<span style="color: black ">
						<i class="fa-solid fa-bars"> </i>
					</span>
				</button>
			</AppRailAnchor>
	
			<AppRailAnchor href="/firewall" title="Firewall">
				<svelte:fragment slot="lead">
					<img
						itemprop="contentUrl"
						src="https://www.svgrepo.com/show/532313/firewall.svg"
						alt="Firewall icon"
						title="Firewall"
						width="35"
						height="35"
					/>
				</svelte:fragment>
				<span class="ms-1">Firewall</span>
			</AppRailAnchor>
			<AppRailAnchor href="/hosts" title="Hosts">
				<svelte:fragment slot="lead">
				<span style="color:  black">
					<i class="fa-solid fa-h fa-xl"></i>
				</span> 
			</svelte:fragment>
				<span class="">Hosts</span>
			</AppRailAnchor>
	
			<svelte:fragment slot="trail">
				<AppRailAnchor href="#" target="_blank" title="ChatBot">
					<svelte:fragment slot="lead">
						<span style="color:  black"> <i class="fa-solid fa-robot text-2xl"></i></span>
					</svelte:fragment>
					<span class="ms-1">Chat Bot</span>
				</AppRailAnchor>
			</svelte:fragment>
		
		</AppRail>
	<div>
		<slot />
		
	</div>	
		<Drawer>
			<div>
				 <ListBox>
					<a href="/" on:click={()=>triggerClose()}>
					<ListBoxItem bind:group={valueSingle} value="Home">
					 Home
					</ListBoxItem>
					</a>
					<a href="/firewall" on:click={() => triggerClose()}>
						<ListBoxItem bind:group={valueSingle} name="medium" value="Firewall">
							Firewall
						</ListBoxItem>
					</a>
					
	
					<a href="/hosts" on:click={() => triggerClose()}>
						<ListBoxItem bind:group={valueSingle} name="medium" value="host">Hosts</ListBoxItem>
					</a>
						 
					<a href="/access" on:click={() => triggerClose()}>
						<ListBoxItem bind:group={valueSingle} name="medium" value="access">Access</ListBoxItem>
					</a>
				</ListBox>
			</div>
		</Drawer>
		
	</div>
	
	
	</div>
