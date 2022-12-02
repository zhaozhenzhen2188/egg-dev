const egg = require('egg');

//const workers = Number(process.argv[2] || require('os').cpus().length);
//cpu几核
const workers =1;

//startCluster实现的egg的多进程
egg.startCluster({
    workers,
    baseDir: __dirname,
});