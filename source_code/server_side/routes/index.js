var express = require('express');
var router = express.Router();
const { Inventory } = require('../schema/schema');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// Logic for addition two numbers
router.post("/add", (req, res) => {
  const { numOne, numTwo } = req.body;

  if (numOne == null || numTwo == null) {
    return res.status(400).json({ error: "Please enter valid inputs" });
  }

  const response = numOne + numTwo;
  res.json({ sum: response });
});


router.post('/inventory', async (req, res) => {
  try {
      const { name, quantity, image } = req.body;
      const inventory = new Inventory({ name, quantity, image });
      const inventoryData = await inventory.save();
      res.status(201).json({ message: `${inventoryData.name} Inventory added successfully`, inventory: inventoryData });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

router.get('/inventories', async (req, res) => {
  try {
      const inventories = await Inventory.find();
      res.json(inventories);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

router.delete('/inventory/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const deletedInventory = await Inventory.findByIdAndDelete(id);
      if (!deletedInventory) {
          return res.status(404).json({ error: 'Inventory not found' });
      }
      res.json({ message: `${deletedInventory.name} Inventory deleted successfully`, deletedInventory });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


router.put('/inventory/:id', async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  try {
      const updatedInventory = await Inventory.findByIdAndUpdate(id, { name, quantity }, { new: true });
      if (!updatedInventory) {
          return res.status(422).json({ error: `${name} Inventory not found` });
      }
      res.json({ message: `${name} Inventory updated successfully`, updatedInventory });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

module.exports = router;
