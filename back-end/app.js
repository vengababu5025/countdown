const express = require('express');
const cors = require('cors');
const bannerRoutes = require('./routes/banner');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/banner', bannerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
