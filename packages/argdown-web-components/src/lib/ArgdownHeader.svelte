<script>
	import ArgdownExpandIcon from './ArgdownExpandIcon.svelte';
	import ArgdownMark from './ArgdownMark.svelte';
	import ArgdownMinimizeIcon from './ArgdownMinimizeIcon.svelte';

	let {
		initialView = 'map',
		withoutMaximize = false,
		withoutLogo = false,
		withoutHeader = false,
		activeView = $bindable(initialView),
		isExpand = $bindable(false),
		notifications = ['Click to enable zoooom!']
	} = $props();
</script>

{#if !withoutHeader}
	<header>
		{#if activeView === 'map'}
			<div class="notificationContainer">
				{#each notifications as notification}
					<div class="notification">{notification}</div>
				{/each}
			</div>
		{/if}

		<nav>
			{#if !withoutLogo}
				<ArgdownMark></ArgdownMark>
			{/if}
			<ul>
				<li>
					<button
						onclick={() => {
							activeView = activeView === 'map' ? 'source' : 'map';
						}}
					>
						{activeView === 'map' ? 'Map' : 'Source'}
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
		</nav>
	</header>
{/if}

<style>
	header {
		position: relative;
		height: 2rem;
		width: 100%;
	}
	nav {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		gap: 3px;
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
		font-size: 0.8rem;
		font-weight: bold;
		color: var(--argdown-button-font-color, #fff);
		background-color: var(--argdown-button-bg-color, #3e8eaf);
		padding: 0.4rem 0.8rem;
		border-radius: 4px;
		border: 0;
		transition: background-color 0.1s ease;
		box-sizing: border-box;
		border-bottom: 1px solid var(--argdown-button-border-bottom-color, #38809d);
		display: flex;
		align-items: center;
		justify-content: center;
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
	}
</style>
