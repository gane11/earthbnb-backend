**Users**
* GET /api/users/:id -returns the user information 
* POST /api/users -sign up

**Session**
* Post /api/session -log in
* Delete /api/session -log out

**Homes**
* GET /api/homes -returns a list of relevant homes
* GET /api/homes/:id -returns a home

**Reservations**
* GET /api/reservations/:id -returns a reservation
* POST /api/reservations -create a reservation
* PATCH /api/reservations/:id -Edits a reservation
* DELETE /api/reservations/:id -Removes a reservation

**Review**
* GET /api/homes/:homeId/reviews/:id - returns all reviews for the specific home
* POST /api/homes/:homeId/reviews -creates review