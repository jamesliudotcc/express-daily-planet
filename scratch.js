// This file is to test the database connection with a fake article sent from the back end"

const db = require('./models');

db.article.create({
  title: 'Nation ot Sure How Many Ex-Trump Staffers It Can Safely Reabsorb',
  content: `WASHINGTON—Noting that the resignation of James Mattis as Secretary of Defense marked the ouster of the third top administration official in less than three weeks, a worried populace told reporters Friday that it was unsure how many former Trump staffers it could safely reabsorb. “Jesus, we can’t just take back these assholes all at once—we need time to process one"`,
  author: 'Onion Writer',
});
