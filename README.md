# Ladmin Vite Plugin

Automatic package to load all assets in the ladmin module.

```js
. . . 

export default defineConfig({
    plugins: [
        laravel({
            input: ladminViteInputs([
                'resources/css/app.css',
                'resources/js/app.js'
            ]),
            refresh: true,
        }),

    ]
});

```