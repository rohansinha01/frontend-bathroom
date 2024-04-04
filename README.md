# Developer Name: Rohan
# App Name: People Be Poopin'

## Overview

People Be Poopin'. People Be needing to know where to go to the bathroom. People Be wanting a clean place to relieve themselves. People Be wanting to know if they have to buy something to use the bathroom. People Be needing to know where to go to the bathroom. People. Be. Poopin'.

For the frontend, I will have an index page to show all the bathrooms with their cleanliness rating. When clicked on, the show pages will show the name assigned to this bathroom, location, cleanliness, and whether you have to purchase anything to use the restroom.

- Deployed Link: https://people-be-poopin.netlify.app/
- Github: https://github.com/rohansinha01/frontend-bathroom

## Frontend Route Map

| Route Name | Path  | Action | Description |
|------------|----------|--------|-------------|
| Bathroom Index | ""  | allBathrooms  |  Renders all of the Bathrooms on a page |
| Create Bathroom | "" | createAction | Creates the new Bathroom from the form |
| Update Bathroom | "/id/"  | updateAction | Updates the existing Bathroom from the form  |
| Remove Item | "delete/id/" | deleteAction | Deletes the Bathroom selected |
| Show Item | "/id/" | aBathroom | Renders a detailed page of the Bathroom |

## React Architecture
![React Architecture](https://imgur.com/Y5SnULl.png)

## Mockups
### Index![Desktop Mockup](https://imgur.com/MzIvmml.png)
### Show![Desktop Mockup](https://imgur.com/GorNEGi.png)