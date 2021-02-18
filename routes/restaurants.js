const express = require('express')
const restaurants = require('../data')

let currentRestaurants = restaurants.length

const router = express.Router()

router.get('/', (req, res) => {
  res.json(restaurants)
})
router.get('/:id', (req, res) => {
  const restaurantId = Number.parseInt(req.params.id)
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  )
  res.json(restaurant)
})

router.post('/', (req, res) => {
  currentRestaurants += 1
  const newRestaurant = {
    id: currentRestaurants,
    ...req.body,
  }
  restaurants.push(newRestaurant)
  res.send(newRestaurant)
})

router.put('/:id', (req, res) => {
  const restaurantId = Number.parseInt(req.params.id)
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  )
  const updateRestaurants = {
    id: restaurantId,
    ...req.body,
  }
  restaurants[restaurantIndex] = updateRestaurants
  res.send(updateRestaurants)
})

router.delete('/:id', (req, res) => {
  const restaurantId = Number.parseInt(req.params.id)
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  )

  restaurants.splice(restaurantIndex, 1)

  res.sendStatus(204)
})

module.exports = router
