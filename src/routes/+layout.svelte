<script>
	// import { initializeStore } from '@skeletonlabs/skeleton';
	import { AppBar, Drawer, initializeStores } from '@skeletonlabs/skeleton';
	import '@fortawesome/fontawesome-free/css/all.min.css'
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	// import Drawer from './Drawer.svelte';
	import LeftDrawer from './components/LeftDrawer.svelte';
	import '../app.css';
	// initializeStore();
	initializeStores();
	const drawerStore = getDrawerStore();
	let valueSingle = 'books';
	const leftOpen = () => {
		const drawerSettings = {
			// Property Overrides
			position: 'left',

			width: 'w-[280px] md:w-[480px] wl-24 ',
			padding: 'p-4',
			rounded: 'rounded-xl',
			meta: {content: LeftDrawer}
		};
		drawerStore.open(drawerSettings);
	};
	const leftClose = () => {
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
				<button class="btn col-span-2" on:click={() => leftOpen()}>
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
			<AppRailAnchor href="/virtualServers" title="VirtualServers">
				<span>
					VirtualServers
				</span>
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
			<svelte:component this={$drawerStore.meta.content}></svelte:component>
		</Drawer>
		
	
	
	</div>
	</div>
