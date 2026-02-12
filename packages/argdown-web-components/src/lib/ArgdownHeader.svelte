<script>
	import ArgdownExpandIcon from './ArgdownExpandIcon.svelte';
	import ArgdownMark from './ArgdownMark.svelte';
	import ArgdownMinimizeIcon from './ArgdownMinimizeIcon.svelte';
	import { Notification } from './notifications';

	let {
		initialView = 'map',
		withoutMaximize = false,
		withoutLogo = false,
		withoutHeader = false,
		activeView = $bindable(initialView),
		isExpand = $bindable(false),
		notifications = [Notification.Zoom],
		deactivatePanZoom = () => {}
	} = $props();
</script>

{#if !withoutHeader}
	<header>
		<div class="notificationContainer">
			{#each notifications as notification}
				<div class="notification">{notification}</div>
			{/each}
		</div>

		<nav>
			<ul>
				{#if activeView === 'map' && !notifications.includes(Notification.Zoom)}
					<li>
						<button
							onclick={() => {
								deactivatePanZoom();
							}}
						>
							Deactivate Zoom
						</button>
					</li>
				{/if}
				<li>
					<button
						class="view-toggle"
						onclick={() => {
							activeView = activeView === 'map' ? 'source' : 'map';
						}}
					>
						{activeView === 'map' ? 'Source' : 'Map'}
					</button>
				</li>

				{#if !withoutMaximize}
					<li>
						<button
							onclick={() => {
								isExpand = !isExpand;
							}}
						>
							{#if isExpand}
								<ArgdownMinimizeIcon></ArgdownMinimizeIcon>
							{:else}
								<ArgdownExpandIcon></ArgdownExpandIcon>
							{/if}
						</button>
					</li>
				{/if}
			</ul>

			{#if !withoutLogo}
				<ArgdownMark></ArgdownMark>
			{/if}
		</nav>
	</header>
{/if}

<style>
	* {
		font-family:
			-apple-system,
			BlinkMacSystemFont,
			Segoe UI,
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			Fira Sans,
			Droid Sans,
			Helvetica Neue,
			sans-serif;

		box-sizing: border-box;
	}
	header {
		position: relative;
		height: 3rem;
		width: 100%;
		display: flex;
	}
	nav {
		height: 100%;
		width: 100%;
		display: flex;
		padding: 8px;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		gap: 10px;
		direction: rtl;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		gap: 3px;
		direction: ltr;
	}
	ul li {
		margin: 0;
		padding: 0;
		display: flex;
	}
	nav button {
		cursor: pointer;
		z-index: 1;
	}
	button {
		font-size: 0.8rem;
		font-weight: bold;
		color: var(--argdown-button-font-color, #fff);
		background-color: var(--argdown-button-bg-color, #3e8eaf);
		height: 100%;
		padding: 0px 10px;
		border-radius: 4px;
		border: 0;
		transition: background-color 0.1s ease;
		box-sizing: border-box;
		border-bottom: 1px solid var(--argdown-button-border-bottom-color, #38809d);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button.view-toggle {
		min-width: 4rem;
	}
	button:hover {
		background-color: var(--argdown-button-bg-hover-color, #387e9c);
	}

	.notificationContainer {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		z-index: 0;
		align-items: center;
	}
	.notification {
		font-weight: bold;
		color: var(--argdown-notification-font-color, black);
	}
</style>
