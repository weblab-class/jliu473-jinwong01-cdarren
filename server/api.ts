import express from "express";
import auth from "./auth";
import socketManager from "./server-socket";
const router = express.Router();

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // Not logged in.
    return res.send({});
  }
  res.send(req.user);
});
router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) {
    const socket = socketManager.getSocketFromSocketID(req.body.socketid);
    if (socket !== undefined) socketManager.addUser(req.user, socket);
  }
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

const Event = require("./models/Event");
const User = require("./models/User");

router.get("/events", (req, res) => {
  Event.find({ _id: req.query._id }).then((events) => res.send(events));
});

router.post("/event", auth.ensureLoggedIn, (req, res) => {
  if (!req.user) {
    return res.send({});
  }

  const newEvent = new Event({
    _id: req.query._id,
    location: req.body.location,
    type: req.body.type,
    time: req.body.time,
    description: req.body.description,
    name: req.body.name,
    guests: [
      {
        name: req.user.name,
        googleid: req.user.googleid,
      },
    ],
    creator: {
      name: req.user.name,
      googleid: req.user.googleid,
    },
  });

  newEvent.save().then((event) => res.send(event));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  const msg = `Api route not found: ${req.method} ${req.url}`;
  res.status(404).send({ msg });
});

export default router;
