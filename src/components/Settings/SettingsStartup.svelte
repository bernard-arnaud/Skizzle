<script>
	import { startup } from '../../shared/store';
	import { addItem } from '../../shared/storage';
	const app = require('electron').ipcRenderer;

	export let init;
	export let title;

	const setStartup = ({ target: { checked } }) => {
		addItem('startup', checked);
		startup.set(checked);

		app.send('launch-startup', checked);
	};
</script>

<style src="./Settings.scss">

</style>

<button class="skz-settings-back" on:click={init}>Retour</button>
<span>{title}</span>
<div for="title" class="skz-settings-switchs">
	<span>Lancer l'application au démarrage</span>
	<input
		id="skz-startup"
		class="skz-settings-switch"
		type="checkbox"
		on:change={setStartup}
		checked={$startup} />
	<label for="skz-startup" class="skz-settings-switch-label" />
</div>
