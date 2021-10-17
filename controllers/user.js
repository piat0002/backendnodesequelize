const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            photo: req.body.photo,
            tarif: req.body.tarif,
            modalite: req.body.modalite,
            modePaiement: req.body.modePaiement,
            horaire: req.body.horaire,
            formation: req.body.formation,
            langue: req.body.langue
        })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
    },
    findOne(req, res) {
        const id = req.params.id;
        return User.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Erreur lors de la récupération du didacticiel avec id=" + id
                });
            })
    },
    update(req, res) {
        const id = req.params.id;
        return User.update({
            nom: req.body.nom,
            prenom: req.body.prenom,
            photo: req.body.photo,
            tarif: req.body.tarif,
            modalite: req.body.modalite,
            modePaiement: req.body.modePaiement,
            horaire: req.body.horaire,
            formation: req.body.formation,
            langue: req.body.langue
        }, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "modification accepter."
                    });
                } else {
                    res.send({
                        message: `Ne peut pas mettre à jour le USER avec id=${id}. Peut-être req.body est vide!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Erreur mise à jour USER avec id=" + id
                });
            });


    }

};