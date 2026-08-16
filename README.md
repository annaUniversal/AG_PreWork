# 🐕 TheDogAPI 🐶

A Code the Dream Pre-Work project by Anna Gerhardt.

A simple web application that allows users to explore dog breeds and view information about individual breeds using TheDogAPI.

This project was created as part of the Code the Dream Pre-Work Assignment.

## Features

* View a complete list of dog breeds
* Select a breed to view detailed information
* View breed information including:

  * Breed group
  * Life span
  * Temperament
  * Origin
  * Breed image
* Load additional photos for the selected breed
* Navigate between the breed list and breed details
* Loading messages are displayed while additional data is being retrieved
* Handles API request errors and unavailable breed data
* Responsive layout for desktop and mobile devices

## API

This project uses [TheDogAPI](https://thedogapi.com/) to retrieve dog breed information and images.

The application uses three API endpoints.

### 1. Get All Breeds

```text
GET https://api.thedogapi.com/v1/breeds
```

Retrieves the list of available dog breeds and displays them on the main page.

### 2. Get Breed by ID

```text
GET https://api.thedogapi.com/v1/breeds/{id}
```

A new GET request is made when a user selects a breed. The returned data is used to display detailed information about the selected breed.

### 3. Get Breed Images

```text
GET https://api.thedogapi.com/v1/images/search?breed_ids={id}&limit=6
```

A new GET request is made when the user selects **Load More Photos**. The returned images are displayed in a photo gallery for the selected breed.

Those breeds have more photos:
  Golden Retriever
  Labrador Retriever
  Siberian Husky
  German Shepherd
  French Bulldog
  Beagle
  Pug
  Rottweiler
  Border Collie

## Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API
* TheDogAPI
* Vite

## Running the Project

### 1. Clone the repository

```bash
git clone Yhttps://github.com/annaUniversal/AG_PreWork.git
```

### 2. Navigate to the project directory

```bash
cd AG_PreWork
```

### 3. Install dependencies

```bash
npm install
```

### 4. Get a TheDogAPI API Key

Create an API key through [TheDogAPI](https://thedogapi.com/).

### 5. Create the environment file

Create a `.env` file in the root directory of the project and add:

```text
VITE_DOG_API_KEY=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your TheDogAPI API key.

**Important:** The `.env` file is excluded from the Git repository so the API key is not exposed publicly.

### 6. Start the development server

```bash
npm run dev
```

### 7. Open the application

Vite will display the local development URL in the terminal, typically:

```text
http://localhost:5173/
```

Open this address in your browser.

## Project Structure

```text
AG_PreWork/
├── index.html
├── style.css
├── script.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

The `.env` file is created locally and should not be committed to the repository.
