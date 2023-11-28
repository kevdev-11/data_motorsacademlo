const app = require('./src/index');
const {authenticated, syncUp} = require('./src/config/database');

const {envs} = require('./src/config/environment');

async function main() {
    try {
        await authenticated();
        await syncUp();
    }
 catch (e) {
    console.log('error server communication', e);
}
}

main();

app.listen(envs.PORT, () => {
    console.log(`Server is running at port ${envs.PORT}`);
});