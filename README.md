## Christian Campus House App
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

This repo stores the mobile application code for the [Christian Campus House app](https://github.com/jackcase04/cch-app-backend) at Missouri S&T. It allows users to view daily chores and set recurring reminders.

## Key Features

- Daily Chores Overview: see what chores are assigned for the day.
- Recurring Reminders: users can schedule notifications to never miss a chore.
- Lightweight & Intuitive: simple interface with complexity handled behind the scenes.

## Motivation

Living in the Christian Campus House, I frequently wished I could schedule recurring reminders for chores. The traditional manual Excel-based system was inconsistent, leading to missed tasks. This app automates task tracking and notifications, improving accountability and efficiency among 64 active users.

## Technologies

- Language: Javascript
- Framework: React Native
- CI/CD: Eas CI/CD, deploys to App Store
- Backend Integration: [CCH App Backend](https://github.com/jackcase04/cch-app-backend)

## Architecture & Process

- User Login: Users signup and create a username and password corresponding to their name.
- Chore Fetching: The app fetches chores from the backend corresponding to the selected user.
- Reminder Scheduling: Users can set recurring notifications to stay on top of chores.
- Modular Design: React components are modularized for scalability and maintainability.

## Screenshots

Here are some screenshots of the user experience using the app.

<p align="left">
    <img src="screenshots/app%20screenshot%202.jpg" alt="Home Screen" width="150" hspace="10"><img src="screenshots/app%20screenshot%203.jpg" alt="Reminder Picker" width="150" hspace="10"><img src="screenshots/app%20screenshot%204.jpg" alt="Header" width="150" hspace="10">
</p>
