import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);


// app.get('/', (request, response) => {
//     return response.json({message: 'Hi'})
// });


app.listen(3333, () => {
    console.log('Server Up');
});