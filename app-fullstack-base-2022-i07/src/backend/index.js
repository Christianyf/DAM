//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

const cors = require('cors');

var express = require('express');
var app = express();
var pool = require('./mysql-connector');
const routerDispositivo = require('./routes/dispositivo')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const myLogger = function(req, res, next) {
    console.log('Logged')
    next()
}

const authenticator = function(req, res, next) {
    // si el usuario tiene permiso
    next()
    // si el usuario no tiene permiso
    res.send('No tenes permiso para acceder al recurso').status(401)
}

app.use(myLogger)
// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));
// to enable cors
app.use(cors(corsOptions));

app.use('/dispositivo', routerDispositivo)

//=======[ Main module code ]==================================================

app.get('/', function(req, res, next) {
    res.send({'mensaje': 'Hola DAM'}).status(200);
});


app.get('/devices/', function(req, res, next) {
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});


app.get('/mediciones/:id',function(req,res){
    const id = req.params.id;
    console.log("Lo que llega ****");
    console.log(req.params);
    pool.query('SELECT * FROM Mediciones WHERE dispositivoId = ?', [id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

app.post('/mediciones/add', function (req, res) {
    console.log("llega a la API")
    pool.query("SET time_zone = '-06:00'");
    const sqlQuery = 'INSERT INTO Mediciones (fecha, valor, dispositivoId) VALUES (?, ?, ?)';
    const values = [req.body.fecha, req.body.valor, req.body.dispositivoId];

    pool.query(sqlQuery, values, function (err, result, fields) {
        if (err) {
            console.error(err);
            res.status(400).send("Error while adding a new measurement");
            return;
        }
        res.send(result);
    });
});

app.get('/logs/',function(req,res){
    pool.query('Select * from Log_Riegos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
