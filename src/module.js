console.log('modele.js');

async function start() {
    return await Promise.resolve('sync working')
}
start().then(console.log)
