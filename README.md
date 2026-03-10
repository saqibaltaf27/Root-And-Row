# Root & Row : Farm-To-Table Provenance API

## Overview
Root & Row is a seasonal farm-to-table bistro that values transparency about where its ingredients come from.
This project provides a lightweight REST API that powers the restaurant's digital Provenance Board, which displays which local farms supplied the ingredients used in the kitchen.

The API Allows:
    - Viewing Partner farms
    - Viewing Recently delivereb ingredients and their farm sources
    - Logging new ingredient deliveries

The backend is built with Node.js, Express and SQLite, making it lightweight and easy to run locally.

## Tech Stack
    - Node.js
    - Express.js
    - SQLite
    - Body Parser
    - CORS

## Setup & Installation
### 1. Clone the Repository

```Bash
git clone https://github.com/saqibaltaf27/Root-And-Row.git
```

### 2. Install Dependencies
npm install

### 3. Seed the Database
Before running the server, populate the database with inital farm and ingredient data
```Bash
node seed/seedData.js
```

This creates: 
    - farms table
    - ingredients table
    - sample farm records
    - sample ingredient records

### 4. Start The Server
```Bash
node server.js
```

### 5. Server URL
After starting the server, it will run at: [http](http://localhost:5000)


## API Endpoints

### 1. Get All Farms
In Postman Create A GET request and enter this.

```Bash

http://localhost:5000/farms

```

It will return result like this

```JSON
[
    {
        "id": 1,
        "name": "Green Valley Farms",
        "location": "Springfield County",
        "specialty": "Organic Root Vegetables"
    },
    {
        "id": 2,
        "name": "Sunny Diary",
        "location": "Maple Town",
        "specialty": "Grass-fed Dairy"
    },
    {
        "id": 3,
        "name": "Heritage Orchards",
        "location": "Riverdale",
        "specialty": "Seasonal Fruits"
    }
]

```

### 2. Get Provenance Data
It returns all ingredients received within the last 24 hours, including information about the farm that supplied them.

```Bash

http://localhost:5000/provenance

```

Result:

```JSON
[
    {
        "id": 1,
        "name": "Carrots",
        "farm_id": 1,
        "date_received": "2026-03-10 13:56:17",
        "daily_special": 1,
        "farm_name": "Green Valley Farms",
        "location": "Springfield County",
        "specialty": "Organic Root Vegetables"
    },
    {
        "id": 2,
        "name": "Milk",
        "farm_id": 2,
        "date_received": "2026-03-10 12:56:17",
        "daily_special": 0,
        "farm_name": "Sunny Diary",
        "location": "Maple Town",
        "specialty": "Grass-fed Dairy"
    },
    {
        "id": 3,
        "name": "Apples",
        "farm_id": 3,
        "date_received": "2026-03-10 14:56:17",
        "daily_special": 1,
        "farm_name": "Heritage Orchards",
        "location": "Riverdale",
        "specialty": "Seasonal Fruits"
    }
]

```

### 3. Log a New Ingredient Delivery
It allows the kitchen manager to record a new ingredient delivery.
This endpoint requires a Simple API Key Authentication Header.

Create a POST request in POSTMAN.

```Bash
http://localhost:5000/ingredients
```

Required Header:
    x-api-key: YourownAPISecret

Result:
```JSON
{
    "message": "Ingredient Created",
    "id": 4
}

```


