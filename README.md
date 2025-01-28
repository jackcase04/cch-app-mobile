# CCH App
## _Christian Campus House App_

This project is an app for members of a residential house in college. As for now, it allows them to "login" by selecting their name and see what chores they have to do for that day. Users can also set reoccuring reminders to remind them on days they have chores so they dont forget. 

I was inspired to create this app because I live in the Christian Campus House and I frequently found myself wishing I could schedule reoccuring reminders for chores, but could not due to the erratic nature of the chore sheet. This app changes all that, making it easy to stay on top of chores.

I created this app using React Native JS, using Expo and Expo Go to develop, Expo Notifications API to handle notifications scheduling, and various Excel formulas and functions to parse the chores sheet.

## Installation

For Android users, installing the app is as simple as clicking the link to download the app file. For iOS users, the process was a little more difficult. I had to apply for unlisted app distribution, which allows your app to be on the App Store but only accessible to people with the link. So, only members of the house with the link can access the app.

## Key Features

The key features of the app are seeing your chores for the day, and scheduling a reoccuring reminder. The app is lightweight and easy to use, since all the hard work came behind the scenes.

## Process

A significant obstacle in creating this app was parsing the complicated chore sheet into a format that the app could read (CSV format). The chore sheet has people look at a sheet corresponding to their side of the house with their room and names for the week, then go over and look at another sheet to see what chore they have for the day. I created a working sheet that pulls the cells of each name (each name corresponds to 2 chore "events", having a name, date, and chore description). Then from there slowly pull all the data depending on those cells so that each chore "event" was accounted for. In the end, they are exported into a final sheet with each chore "event" that can be exported as a CSV file.

I also exported each name into a CSV file that the app can read.

From there I could import the CSV data into the app and convert to a 2D array. The app then handles the data in the Javascript files above.

## Screenshots

Here are some screenshots of the user experience using the app.

<p align="left">
    <img src="screenshots/app%20screenshot%201.jpg" alt="Login Screen" width="150" hspace="10"><img src="screenshots/app%20screenshot%202.jpg" alt="Home Screen" width="150" hspace="10"><img src="screenshots/app%20screenshot%203.jpg" alt="Reminder Picker" width="150" hspace="10"><img src="screenshots/app%20screenshot%204.jpg" alt="Header" width="150" hspace="10">
</p>
