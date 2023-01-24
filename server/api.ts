import express from "express";
import auth from "./auth";
import socketManager from "./server-socket";

import Event from "./models/Event";
import Guest from "./models/Guest";

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

router.get("/events", (req, res) => {
  Event.findById(req.query.id).then((event) => res.send(event));
});

router.post("/event", auth.ensureLoggedIn, (req, res) => {
  if (!req.user) {
    return res.send({});
  }

  const newEvent = new Event({
    location: req.body.location,
    type: req.body.type,
    time: req.body.time,
    description: req.body.description,
    name: req.body.name,
    guests: [req.user.name],
    creator: {
      name: req.user.name,
      googleid: req.user.googleid,
    },
  });

  newEvent.save().then((event) => res.send(event));
});

router.get("/guests", (req, res) => {
  Guest.find({ event_id: req.body.event_id }).then((guests) => res.send(guests));
});

router.post("/guest", (req, res) => {
  const newGuest = new Guest({
    name: req.user ? req.user.name : "Anonymous",
    googleid: req.user ? req.user.googleid : null,
    event_id: req.body.event_id,
  });

  newGuest.save().then(() => res.send(newGuest));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  const msg = `Api route not found: ${req.method} ${req.url}`;
  res.status(404).send({ msg });
});

export default router;
