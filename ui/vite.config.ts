import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

const config: UserConfig = {
	plugins: [sveltekit(),  Unocss({
		presets: [
		  presetUno(),
		  // ...custom presets
		],
	  })]
};

export default config;
