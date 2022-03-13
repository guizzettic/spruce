# Spruce Takehome


## Tech Used:
- Create React App to initialize project
- Material UI as my CSS library


## Architectural Overview:
- App component:
  - No state being handled besides whether to show Dialog Form
  - Renders BookingForm and BookingTable components
- Header component:
  - Header component where we could add routes or other functionality
- BookingForm component:
  - Handles state for the form
  - Handles API call when submitting form
  - Renders form for user input
  - Notifies user when they successfully submit a form
- BookingTable component: 
  - Renders the customer bookings table
  - Handles booking information state
  - Fetches bookings from API
- utils file:
  - Broke up functions into a utils file


## Reflections/Justifications:
- Decided based on the application a more robust state management solution wasn't necessary as props were not passed down more than one level
- Decided to use Material UI to simplify CSS

## Things I'd work on next wtih more time:
- Would have separated out components from BookingFrom and made a modular set of buttons and TextField components
- Better form validation
- Improve responsiveness
- Implement testing
- Improve view on mobile devices
- Add pagination option to gather a certain amount of users at a time
- Added a more robust date handling capability

## How to run:
- clone repository
- run npm i
- run npm start
