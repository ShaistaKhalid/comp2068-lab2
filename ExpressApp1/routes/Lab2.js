'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var Xinput = req.query.x;
    var Yinput = req.query.y;
    var Xoutput = parseInt(Xinput);
    var Youtput = parseInt(Yinput);

    //res.render('index', { title: 'Express' });
    if (req.query.method == 'add' && Xoutput && Youtput) {


        res.send(Xoutput + " + " + Youtput + " = " + ((Xoutput + Youtput)).toString());
    }

    else if (req.query.method == 'subtract' & Xoutput & Youtput) {


        res.send(Xoutput + " - " + Youtput + " = " + ((Xoutput - Youtput)).toString());
    }

    else if (req.query.method == 'multiply' & Xoutput & Youtput) {


        res.send(Xoutput + " * " + Youtput + " = " + ((Xoutput * Youtput)).toString());
    }

    else if (req.query.method == 'divide' & Xoutput & Youtput) {


        res.send(Xoutput + " / " + Youtput + " = " + ((Xoutput / Youtput)).toString());
    }



    else {

        res.send("Error, please enter again");
    }
});

module.exports = router;