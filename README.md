# CCH App
## _Christian Campus House App_

This project is an app for members of a residential house in college. As for now, it allows them to "login" by selecting their name and see what chores they have to do for that day. Users can also set reoccuring reminders to remind them on days they have chores so they dont forget. 

## Inspiration

I was inspired to create this app because I live in the Christian Campus House and I frequently found myself wishing I could schedule reoccuring reminders for chores, but could not due to the erratic nature of the chore sheet. This app changes all that, making it easy to stay on top of chores.

## Technologies Used

Frontend: React Native (JavaScript)
Development Tools: Expo, Expo Go
Notifications: Expo Notifications API

## Installation

# For Android Users
Installation is straightforward—simply download and install the provided app file.

# For iOS Users
The app is available via unlisted app distribution on the App Store. Only members with the provided link can access the app.

## Key Features

The key features of the app are seeing your chores for the day, and scheduling a reoccuring reminder. The app is lightweight and easy to use, with all complexity handled behind the scenes.

## Process

This app pulls data from the backend I created to store all the data. It then allows the user to select their name, then fetches the chores corresponding to that name. User preferences (name, reminder time, and reminder status) are stored using Asynchronous Storage.

The app is modularized into React components, ensuring scalability and ease of maintenance. To view the code for the API to fetch the chores, visit https://github.com/jackcase04/cch-house-app-backend

## Screenshots

Here are some screenshots of the user experience using the app.

<p align="left">
    <img src="screenshots/app%20screenshot%201.jpg" alt="Login Screen" width="150" hspace="10"><img src="screenshots/app%20screenshot%202.jpg" alt="Home Screen" width="150" hspace="10"><img src="screenshots/app%20screenshot%203.jpg" alt="Reminder Picker" width="150" hspace="10"><img src="screenshots/app%20screenshot%204.jpg" alt="Header" width="150" hspace="10">
</p>
