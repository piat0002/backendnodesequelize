const userController = require('../controllers').user;

module.exports = (app) => {
    app.get('/api',(req,res)=> res.status(200)
        .send({
            message: 'welcome to the BIg chungus API',
        }));
    app.post("/api/user",  userController.create);
    app.get("/api/user/:id", userController.findOne);
    app.put("/api/user/:id", userController.update);
        
}