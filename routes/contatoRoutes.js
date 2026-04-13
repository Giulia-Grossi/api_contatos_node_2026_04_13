constexpress = require('express');
constrouter = express.Router();
constContato = require('../modelos/contato');


//Rotaparaobtertodososcontatos
router.get('/', async (req, res) => {
    try {
        constcontatos = awaitContato.find();
        res.json(contatos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//RotaparaobterumcontatoporID
router.get('/:id', getContato, (req, res) => {
    res.json(res.contato);
});


//Rotaparacriarumnovocontato
router.post('/', async (req, res) => {
    constcontato = newContato({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        foto: req.body.foto,
    });


    try {
        constnewContato = awaitcontato.save();
        res.status(201).json(newContato);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


//RotaparaatualizarumcontatoporID
router.put('/:id', getContato, async (req, res) => {
    if (req.body.nome != null) {
        res.contato.nome = req.body.nome;
    }
    if (req.body.email != null) {
        res.contato.email = req.body.email;
    }
    if (req.body.telefone != null) {
        res.contato.telefone = req.body.telefone;
    }
    if (req.body.endereco != null) {
        res.contato.endereco = req.body.endereco;
    }
    if (req.body.foto != null) {
        res.contato.foto = req.body.foto;
    }


    try {
        constupdatedContato = awaitres.contato.save();
        res.json(updatedContato);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


//RotaparaexcluirumcontatoporID
router.delete('/:id', getContato, async (req, res) => {
    try {
        awaitres.contato.deleteOne();
        res.json({ message: 'Contatoexcluídocomsucesso!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


asyncfunctiongetContato(req, res, next){
    try {
        constcontato = awaitContato.findById(req.params.id);
        if (contato == null) {
            returnres.status(404).json({ message: 'Contatonãoencontrado' });
        }
        res.contato = contato;
        next();
    } catch (err) {
        returnres.status(500).json({ message: err.message });
    }
}


module.exports = router;