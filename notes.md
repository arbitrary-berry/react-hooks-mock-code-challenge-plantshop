As a user:

[] When the app starts, I can see all plants.
[X] I can add a new plant to the page by submitting the form.
[] I can mark a plant as "sold out".
[X] I can search for plants by their name and see a filtered list of plants.

Endpoints for Core Deliverables
GET /plants
Example Response:

[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
POST /plants
Required Headers:

{
  "Content-Type": "application/json"
}
Request Object:

{
  "name": "string",
  "image": "string",
  "price": number
}
Example Response:

{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
