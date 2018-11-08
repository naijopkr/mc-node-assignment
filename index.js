const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios').create({
  baseURL: process.env.NHTSA_API_URI,
  params: { format: 'json' }
})

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/vehicles/:modelYear/:manufacturer/:model', async (req, res) => {
  const modelYear = req.params.modelYear
  const manufacturer = req.params.manufacturer
  const model = req.params.model

  try {
    //FETCH DATA FROM NHTSA API
    const nhtsa = await axios.get(
      `modelyear/${modelYear}/make/${manufacturer}/model/${model}`
    )

    let { Count, Results } = nhtsa.data

    //CHECK FOR NEED TO FETCH CRASHRATINGS
    if (Count && req.query.withRating === 'true') {
      
      //FETCH CRASHRATING FOR EACH VEHICLE 
      for (const [index, result] of Results.entries()) {
        const rating = await axios.get(`/VehicleId/${result.VehicleId}`)
        Results[index] = {
          CrashRating: rating.data.Results[0].OverallRating,
          ...result
        }
      }
    }

    res.send({ Count, Results })

  } catch (err) {
    console.log('ERROR STATUS:', err.response.status)
    console.log('ERROR MESSAGE:', err.message)
    res.send({ Count: 0, Results: [] })
  }
})

app.post('/vehicles', (req, res) => {
  const { modelYear, manufacturer, model } = req.body
  res.redirect(`/vehicles/${modelYear}/${manufacturer}/${model}`)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Server is listening to port', PORT)
})