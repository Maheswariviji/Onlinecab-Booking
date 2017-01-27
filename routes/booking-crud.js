
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  bookingID:String,
 city:String,
    cabType: String,
    pickupLoc:String,
    dropLoc:String,
    Date:{ type: Date, default: Date.now },
    Time:String,
    noofPersons:Number,
    tripType:String,
    minBill:Number,
    freeKM:Number,
    waitingCharge:Number,
    chargeperKM:Number   
 });
var Book = mongoose.model('Book', bookSchema, 'booking');

  router.get('/bk', function (req, res) {

    console.log("Reached Booking in server");
    Book.find({}, function (err, docs) {
         res.json(docs);
    });
});


router.get('/bk/:id', function (req, res) {

    console.log("Reached Booking in server based on id");
     Book.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/bk', function(req, res){
  console.log(req.body);
  var id = req.body.bookingID;
  var cty=req.body.city;
  var cab = req.body.cabType;
  var locpickup=req.body.pickupLoc;
  var locdrop=req.body.dropLoc;
  var dt=req.body.Date;
  var timing=req.body.Time;
  var count=req.body.noofPersons;
  var type=req.body.tripType;
  var mbill=req.body.minBill;
  var free=req.body.freeKM;
  var wcharge=req.body.waitingCharge;
  var charge=req.bodyParser.chargeperKM;
  var bookcab = new Book({
    bookingID : id,
    city:cty,
   cabType:name,
   pickupLoc:locpickup,
   dropLoc:locdrop,
   Date:dt,
   Time:timing,
   noofPersons:count,
tripType:type,
minBill:mbill,
freeKM:free,
waitingCharge:wcharge,
chargeperKM:charge
  
  });

  bookcab.save(function(err, docs){

    if ( err ) throw err;
    console.log(id);
    console.log("Booking Successfully");
    res.json(docs);
  });

  })

router.delete('/bk/:id', function(req, res){

   console.log("Booking Delete");

      
      Book.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/bk/:id', function(req, res){

    console.log("REACHED PUT");
    console.log(req.body);
    Book.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
