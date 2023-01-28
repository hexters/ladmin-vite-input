var fs = require('fs')
var path = require('path')

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
            let asset = path.join(dirModule, dirs[i], 'Resources', types[x].dir, dirs[i].toLowerCase() + types[x].ext);
            if (fs.existsSync(asset)) {
                modules.push(
                    path.join(dirModule, dirs[i], 'Resources', types[x].dir, dirs[i].toLowerCase() + types[x].ext)
                );
            }
        }

    }

    return modules;

}

module.exports = function ladminViteInputs(assets) {
    return [...assets, ...modules()];
}