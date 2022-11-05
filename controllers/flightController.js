


const {Flights} = require("../models/Flight");

const {v4: uuid} = require('uuid').v4();
//get all flights
exports.getFlights = async(req, res) => {
    try {
        const flights = Flights;
        res.status(200).json({
            message: "All flights",
            flights: flights 
        });
    } catch (err) {
        res.status(500 ).json({message: err });
    }
} 
// get single flight
exports.getFlight = async (req, res) => {
    try{
        let id = req.params.id
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200), json({
            message: "flight found",
            flight,
        })
    } catch (error) {

    }
}

// update edit flight

exports.updateFlight = async (req, res) => {
    try{
        let id = req.param.id;
        const flight = Flight.find((flight) => flight.id === id);
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        price.date = date;
        res.status(200).json({
            message:"flight updated",
            flight,
        });
    } catch(err){
        res.status(500).json({message: err.message});
    }
}
// delete flight

exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200), json({
            message: "flight deleted",
            flight,
        });
    } catch (err) {
        res.status(500), json({
            message: "err message"
        });
    }
}
// add/book flight
exports.createFlight = async (req, res) => {
    try{
        const {title, time, price, date} = await req.body;
        const newflight = {
            id: uuid,
            title,
            time,
            price,
            date,
        }


        Flights.push(newflight);
    
        res.status(201).json({
            mesage:"flight booked",
            newflight
        })
    } catch (err) {
        res.status(500).json({message: err.mesage});
    }
}