const Teams = require('../Model/Teams')

const TeamsController = {

    createTeams: async (req, res) => {
        try {
            const teams = new Teams(req.body);
            await teams.save();

            if(!teams)
                return res.status(404).send({message : 'Prestamo no controlado'})

            const reponse = await Teams.findOne({ _id : teams._id }).populate('_idUser')
            console.log( reponse )
            
            return res.send( reponse );

        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },
    getAllTeams: async (req, res) => {
        try {
            const teams = await Teams.find({}).populate('_idUser');
            if(!teams)
                return res.status(404).send({ message: 'Prestamo no encotrado' });
            return res.send(teams);
        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    }
}

module.exports = TeamsController