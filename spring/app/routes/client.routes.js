module.exports = (app) => {
    const clients = require('../controllers/client.controller.js');

 
    app.post('/clients', clients.create);

    app.get('/clients', clients.getAll);

 
    app.get('/clients/:clientId', clients.getById);

    
    app.put('/clients/:clientId', clients.update);

   
    app.delete('/clients/:bookId', clients.delete);
}
