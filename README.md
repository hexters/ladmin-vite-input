# Ladmin Vite Plugin

Automatic package to load all assets in the ladmin module.

```js

. . . 
import ladminViteInputs from '@hexters/ladmin-vite-input'
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
    ],
});


```

## LICENSE
MIT