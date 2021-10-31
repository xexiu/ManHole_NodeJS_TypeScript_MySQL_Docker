import cors from 'cors';
import dotEnv from 'dotenv';
import express from 'express';
import buildManholeCoverController from './src/controllers/BuildManholeCover.controller';

const PORT = 8080;

dotEnv.config();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// tslint:disable-next-line: no-console

app.post('/api/manhole_cover/build', buildManholeCoverController);
// tslint:disable-next-line: only-arrow-functions
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log(`server started at http://localhost:${PORT}`);
});
