const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });

const port = process.env.RUNNING_PORT || 5500

const app = require('./app');


app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
