
const Habit = require('../models/habit');

// Function for redirecting to main home page
exports.home = async (req, res) => {
  try {
    const habits = await Habit.find(); // Fetch all habits
    res.render('homePage', {
      title: "Home",
      habits, // Use the fetched habits data
    });
  } catch (err) {
    console.error('Error fetching habits:', err);
    res.render('error', { message: 'Error fetching habits' }); // Handle errors gracefully
  }
};

// Function for creating a new habit
exports.createHabit = async (req, res) => {
  const { description, category, frequency, notes, reminder } = req.body;

  try {
    const newHabit = new Habit({
      description,
      category,
      frequency,
      notes,
      reminder,
    });
    await newHabit.save();
    res.redirect('/'); // Redirect to home page after successful creation
  } catch (err) {
    console.error('Error creating habit:', err);
    res.render('error', { message: 'Error creating habit' }); // Handle errors gracefully
  }
};

// Function for deleting habits
exports.deleteHabit = async (req, res) => {
  const habitId = req.query.id; 

  try {
    await Habit.findByIdAndDelete(habitId);
    res.redirect('/'); 
  } catch (err) {
    console.error('Error deleting habit:', err);
    res.render('error', { message: 'Error deleting habit' }); 
  }
};

// Function for fetching data for edit page
exports.editPage = async (req, res) => {
  const habitId = req.query.id;

  try {
    const habit = await Habit.findById(habitId);
    res.render('editPage', {
      title: 'Edit Page',
      habit,
    });
  } catch (err) {
    console.error('Error fetching habit for edit:', err);
    res.render('error', { message: 'Error fetching habit for edit' }); // Handle errors gracefully
  }
};

// Function for updating habit details
exports.editHabit = async (req, res) => {
  const habitId = req.query.id;
  const { description, category, frequency, notes, reminder } = req.body;

  const updates = { description, category, frequency, notes, reminder };

  try {
    await Habit.findByIdAndUpdate(habitId, updates);
    res.redirect('/'); // Redirect to home page after successful update
  } catch (err) {
    console.error('Error updating habit:', err);
    res.render('error', { message: 'Error updating habit' }); // Handle errors gracefully
  }
};
