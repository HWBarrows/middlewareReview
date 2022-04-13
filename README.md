# Middleware & Server mini project

This is a small Express server that has:

- A `POST` endpoint at `/validateUser`
- A `POST` endpoint at `/sanitizeUser`

The programmed controllers has functions which confirms the following:


- the objects eceived all contain `firstName`, `lastName`, `age`, `learning group` and `email`
- the user is above 18years old
- all errors send a message to the user

#### EXAMPLE RESPONSES

```json
// Success case
{
  "message" : "This user is valid!"
}

// Failure
{
  "message": "We can not validate your user. They are  below 18 years of age"
}

```

For the `/sanitizeUser` endpoint:

- The controller ensures that the `firstName` and `lastName` start with a capital letter
- Additionally, the controller sorts nested arrays, such as `favoriteBands`, alphabetically

