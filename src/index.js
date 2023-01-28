import fs from 'fs';
import path from 'path'

function modules() {
    let modules = [];
    let dirModule = path.join('Modules');
    let dirs = fs.readdirSync(dirModule);

    let types = [{
        dir: 'js',
        ext: '.js'
    },
    {
        dir: 'css',
        ext: '.css'
    },
    {
        dir: 'sass',
        ext: '.scss'
    }];

    for (let i = 0; i < dirs.length; i++) {

        for (let x = 0; x < types.length; x++) {
            modules.push(
                path.join(dirModule, dirs[i], 'Resources', types[x].dir, dirs[i].toLowerCase() + types[x].ext)
            );
        }

    }

    return modules;

}

export default function ladminViteInputs(assets) {
    return [...assets, ...modules()];
}