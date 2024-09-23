# ReturnToPlay - Knee Rehab Web App

## Overview

Return To Play is a web application designed to assist athletes with personalized knee rehabilitation exercises based on specific tendon injuries. Built with a user-friendly interface, the app helps users select the injured part of their knee—patellar tendon, quad tendon, or hamstring tendon—and generates a custom rehabilitation plan tailored to their needs.

The app was developed with insights from my personal experience as a Division 1 track and field athlete and aims to help fellow athletes recover efficiently.

## Features
- Dynamic Injury Selection: Users can select one or more knee tendon injury areas (Patellar, Quad, or Hamstring), and the app will generate a rehab script.
- Exercise Suggestions: Based on the selected tendon injuries, the app queries a connected SQL database to retrieve relevant exercises.
- Mobile Responsive: The app adapts seamlessly across various devices, ensuring accessibility on both desktop and mobile.
- Automated Updates: Deployed via Vercel, the app automatically updates with each GitHub push.

## Tech Stack
- Next.js: Frontend framework for building server-side rendered React applications.
- TypeScript: Strongly typed JavaScript for better development experience and type safety.
- Tailwind CSS: Utility-first CSS framework for responsive and modern UI design.
- SQL Database: Stores and retrieves exercises based on user input.

## Usage
1. On the home page, select the injured tendon(s) from the options: Patellar Tendon, Quad Tendon, or Hamstring Tendon.
2. Click Generate Rehab Plan to retrieve a personalized set of exercises based on your selections.
3. Follow the suggested exercises to guide your rehab.

## Future Plans
- User Authentication: Allow users to save and track their rehab progress.
- Expanded Exercise Library: Include more exercises and rehab techniques as the app evolves to address more injuries and also gradually progress the patients to more challenging exercises.
- Multi-language Support: Plan to add support for multiple languages for wider accessibility.
