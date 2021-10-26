import dotEnv from 'dotenv';
import express from 'express';
import bookingController from './controllers/bookingHttp.controller';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/booking', bookingController);
// tslint:disable-next-line: only-arrow-functions
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log(`server started at http://localhost:${PORT}`);
});
