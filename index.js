const express = require('express');
const cors = require('cors');
const googleAutoSugg = require('google-autosuggest');

const app = express();

app.use(cors())
app.use(express.json());

app.post('/suggs', async (req, res) => {
    try {
        const suggetions = await googleAutoSugg(req.body.query);
        res.status(200).json({
            status: 'success',
            data: {
                suggetions
            }
        })
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
})

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`App listening at port ${port}`))