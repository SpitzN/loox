const express = require('express');
const router = express.Router();
const fs = require('fs');

// sanity check route
router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/data', async (req, res) => {
  try {
    const data = await fs.readFileSync('./data.json');

    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

// router.get('/data', (req, res) => {
//   fs.readFile('./data.json', 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(data);
//       res.sendStatus(200);
//     }
//   });
// });

// router.get(`/users/profile`, auth, async (req, res) => {
//     res.send(req.user);
//   });

//   router.get(`/users/:id/avatar`, async (req, res) => {
//     try {
//       const user = await User.findById(req.params.id);
//       if (!user || !user.avatar) {
//         throw new Error();
//       }
//       res.set("Content-Type", "image/png");
//       res.send(user.avatar);
//     } catch (error) {
//       res.status(404).send();
//     }
//   });

module.exports = router;
