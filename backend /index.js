const config = require('./src/configs/config.mongodb');
const app = require('./src/app');
const port = config.app.port;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})