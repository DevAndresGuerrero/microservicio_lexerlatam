import app from './index.js';
import sequelize from './database/connection.js';

sequelize.sync().then(() => console.log('Database synced'));

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});