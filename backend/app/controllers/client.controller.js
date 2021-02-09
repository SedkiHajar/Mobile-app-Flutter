const Client= require('../models/client.model.js');


exports.create = (req, res) => {
    // Validate request because in model we required the title
    if(!req.body.firstname) {
        return res.status(400).send({
            message: "Please enter client firstname."
        });
    }

    // Create a book
    const client = new Client({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone ,
        address: req.body.address ,
        street: req.body.street,
        city: req.body.city,
        Zip: req.body.zip ,
        country: req.body.country,
        lat: req.body.lat ,
        lng: req.body.ing ,
    
    });

    // Save Book
    client.save()
        .then(oClient => {
            res.send(oClient);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the client."
        });
    });
};

// Get all and return all clients.
exports.getAll = (req, res) => {
    Client.find()
        .then(oClient => {
            res.send(oClient);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the client."
        });
    });
};

// Get a single client with a clientId
exports.getById = (req, res) => {
    Client.findById(req.params.clientId)
        .then(oClient => {
            if(oClient) {
                res.send(oClient);
            }
            return res.status(404).send({
                message: "client not exist with id " + req.params.clientId
            });
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "client not exist with id " + req.params.clientId
            });
        }
        return res.status(500).send({
            message: "Some error occurred while retrieving the client with clientId " + req.params.clientId
        });
    });
};

// Update a client by the clientId
exports.update = (req, res) => {
    // Validate Request because title is required
    if(!req.body.firstname) {
        return res.status(400).send({
            message: "Please enter client name."
        });
    }

    // Find client and update it
    Client.findByIdAndUpdate(req.params.clientId, {
        firstname: req.body.firstname,
        lastname: req.body.lastname ,
        email: req.body.email,
        phone: req.body.phone ,
        country: req.body.country,
        street: req.body.street ,
        city: req.body.city,
        zip: req.body.zip,
        lat: req.body.lat,
        ing: req.body.ing

    }, {new: true})
        .then(oClient => {
            if(oClient) {
                res.send(oClient);
            }
            return res.status(404).send({
                message: "client does not exist with clientId " + req.params.clientId
            });

        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "client does not exist with clientId " + req.params.clientId
            });
        }
        return res.status(500).send({
            message: "Some error occurred while updating the client with clientId" + req.params.clientId
        });
    });
};

// Delete the client with the clientId
exports.delete = (req, res) => {
    Client.findByIdAndRemove(req.params.clientId)
        .then(oClient => {
            if(oClient) {
                res.send({message: "client has been deleted successfully!"});
            }
            return res.status(404).send({
                message: "client not exist with clientId" + req.params.clientId
            });
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "client not exist with clientId" + req.params.clientId
            });
        }
        return res.status(500).send({
            message: "Some error occurred while deleting the client with clientId" + req.params.clientId
        });
    });
};
