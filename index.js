const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.unsubscribe(express.json())
// middleware
app.get('/', (req, res)=>{
    res.send('Simple Crud in running')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})